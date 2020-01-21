import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  loadGamerDetails,
  applyReviewFilters,
  doPushReview,
  setGamerDetailsError,
} from '../../../redux/actions/gamerDetails';
import Localization from '../../../config/localization/Localization';
import { BUTTON_TYPE } from './_ui/navheader/_ui/actionbuttons/_ui/actionbutton/ActionButton';
import NavHeader from './_ui/navheader/NavHeader';
import CardsTab from './_ui/cardstab/CardsTab';
import ReviewsTab from './_ui/reviewstab/ReviewsTab';
import LeaguesTab from './_ui/leaguestab/LeaguesTab';
import LiveMatchTab from './_ui/livematchtab/LiveMatchTab';
import ChampionsTab from './_ui/championstab/ChampionsTab';
import GamerNotFound from './_ui/gamernotfound/GamerNotFound';
import GamerSkeleton from './_ui/gamerskeleton/GamerSkeleton';
import styles from './styles';
import { getGamerDetailsUrl } from '../../../config/routes';
import Footer from '../footer/Footer';
import { pushNotification } from '../../../redux/actions/notifications';
import { NOTIFICATION_TYPE } from '../../../datamanager/models/NotificationRecord';
import Validator from '../../../datamanager/api/Validator';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  gamerData: state.gamerDetails.get('data'),
  connectedUser: state.app.getIn(['data', 'user']),
  loading: state.gamerDetails.get('loading'),
  error: state.gamerDetails.get('error'),
});
class GamerDetails extends PureComponent {
  static propTypes = {
    config: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    gamerData: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    staticDataUrl: PropTypes.string,
    history: PropTypes.object.isRequired,
    connectedUser: PropTypes.object,
  };

  static defaultProps = {
    config: null,
    gamerData: null,
    staticDataUrl: null,
    connectedUser: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: BUTTON_TYPE.OVERVIEW,
      preselect: null,
      notifLabels: Localization.Labels.notifications,
    };
  }

  componentDidMount() {
    this.props.dispatch(
      loadGamerDetails(
        this.props.match.params.platform,
        this.props.match.params.region,
        this.props.match.params.game,
        this.props.match.params.gamertag
      )
    );
  }

  onSelectHeaderTab = buttonType => {
    if (buttonType !== this.state.selectedTab) {
      this.setState({ selectedTab: buttonType });
    }
  };

  onApprovalButtonClick = type => {
    console.log(`on ${type} button button click`);
    this.selectTab(BUTTON_TYPE.REVIEWS, type);
  };

  onReviewButtonClick = () => {
    console.log('On review button click');
    this.selectTab(BUTTON_TYPE.REVIEWS);
  };

  onReviewSubmitClick = ({
    review,
    selectedAttributes,
    isApproval,
    isDisapproval,
  }) => {
    if (this.state.selectedTab !== BUTTON_TYPE.REVIEWS) {
      this.setState({ selectedTab: BUTTON_TYPE.REVIEWS });
      return;
    }
    if (!this.props.connectedUser) {
      this.props.dispatch(
        pushNotification({
          title: this.state.notifLabels.accountRequired.title,
          type: NOTIFICATION_TYPE.WARNING,
        })
      );
    } else {
      const error = Validator.doPostReviewValidation(
        review,
        selectedAttributes,
        isApproval,
        isDisapproval
      );
      if (error !== true) {
        this.props.dispatch(setGamerDetailsError(error));
      } else {
        this.props.dispatch(
          doPushReview({
            gamerId: this.props.gamerData.gamerId,
            review,
            selectedAttributes,
            isApproval,
            isDisapproval,
            username: this.props.connectedUser.username,
          })
        );
      }
    }
  };

  getStaticDataUrlForPlatform = () =>
    this.props.config
      ? this.props.config.getStaticDataUrlForPlatform(
          this.props.match.params.platform
        )
      : null;

  onReviewFilterChange = (show, filterBy) => {
    this.props.dispatch(
      applyReviewFilters(
        this.props.gamerData.reviewsCardRecord.applyReviewsFilter(
          show,
          filterBy
        )
      )
    );
  };

  selectTab = (tabType, preselect = null) => {
    if (this.state.selectedTab !== tabType) {
      this.setState({
        preselect,
        selectedTab: tabType,
      });
    }
  };

  doSearchPlayer = gamer => {
    this.props.history.push(
      getGamerDetailsUrl(
        this.props.gamerData.platform,
        this.props.gamerData.region,
        this.props.gamerData.gameCode,
        gamer
      )
    );
    this.props.dispatch(
      loadGamerDetails(
        this.props.gamerData.platform,
        this.props.gamerData.region,
        this.props.gamerData.gameCode,
        gamer
      )
    );
  };

  renderGamerDetailsContent = () => {
    let content = null;
    if (this.state.selectedTab === BUTTON_TYPE.OVERVIEW) {
      content = (
        <CardsTab
          gamertag={this.props.gamerData.gamertag}
          gameCode={this.props.gamerData.gameCode}
          platform={this.props.gamerData.platform}
          rankedCardRecord={this.props.gamerData.rankedCardRecord}
          championsCardRecord={this.props.gamerData.championsCardRecord}
          approvalsCardRecord={this.props.gamerData.approvalsCardRecord}
          disapprovalsCardRecord={this.props.gamerData.disapprovalsCardRecord}
          reviewsCardRecord={this.props.gamerData.reviewsCardRecord}
          onApprovalButtonClick={this.onApprovalButtonClick}
          onReviewButtonClick={this.onReviewButtonClick}
          trendsCardRecord={this.props.gamerData.trendsCardRecord}
          historyCardList={this.props.gamerData.gameHistoryList}
          staticDataUrl={this.getStaticDataUrlForPlatform()}
          doSearchPlayer={this.doSearchPlayer}
        />
      );
    } else if (this.state.selectedTab === BUTTON_TYPE.REVIEWS) {
      content = (
        <ReviewsTab
          approvalsCardRecord={this.props.gamerData.approvalsCardRecord}
          disapprovalsCardRecord={this.props.gamerData.disapprovalsCardRecord}
          reviewsCardRecord={this.props.gamerData.reviewsCardRecord}
          attributesList={this.props.gamerData.attributesList}
          onReviewSubmitClick={this.onReviewSubmitClick}
          preselect={this.state.preselect}
          onReviewFilterChange={this.onReviewFilterChange}
        />
      );
    } else if (this.state.selectedTab === BUTTON_TYPE.CHAMPIONS) {
      content = <ChampionsTab />;
    } else if (this.state.selectedTab === BUTTON_TYPE.LEAGUES) {
      content = <LeaguesTab />;
    } else if (this.state.selectedTab === BUTTON_TYPE.LIVE_MATCH) {
      content = <LiveMatchTab />;
    }

    return content;
  };

  render() {
    if (!this.props.config) return null;
    return (
      <>
        {this.props.loading && <GamerSkeleton />}
        {!this.props.loading && this.props.gamerData && (
          <div style={styles.container}>
            <NavHeader
              selectedTab={this.state.selectedTab}
              gamertag={this.props.gamerData.gamertag}
              gamerLevel={this.props.gamerData.level}
              region={this.props.gamerData.region}
              gamerIconUrl={`${this.getStaticDataUrlForPlatform()}${
                this.props.gamerData.gamerIconUrl
              }`}
              onSelectTab={this.onSelectHeaderTab}
              onReviewSubmitClick={this.onReviewSubmitClick}
              staticDataUrl={this.getStaticDataUrlForPlatform()}
            />
            {this.renderGamerDetailsContent()}
          </div>
        )}
        {!this.props.loading && !this.props.gamerData && <GamerNotFound />}
        <Footer />
      </>
    );
  }
}

export default withRouter(connect(mapStateToProps)(GamerDetails));
