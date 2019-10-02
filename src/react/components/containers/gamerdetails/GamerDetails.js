import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  loadGamerDetails,
  applyReviewFilters,
} from '../../../redux/actions/gamerDetails';
import { BUTTON_TYPE } from './_ui/navheader/_ui/actionbuttons/_ui/actionbutton/ActionButton';
// import { APPROVAL_TYPE } from '../../../datamanager/models/ApprovalsCardRecord';
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

const mapStateToProps = (state) => ({
  config: state.app.get('data'),
  gamerData: state.gamerDetails.get('data'),
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
  };

  static defaultProps = {
    config: null,
    gamerData: null,
    staticDataUrl: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: BUTTON_TYPE.OVERVIEW,
      preselect: null,
    };
  }

  componentDidMount() {
    this.props.dispatch(loadGamerDetails(
      this.props.match.params.platform,
      this.props.match.params.region,
      this.props.match.params.game,
      this.props.match.params.gamertag,
    ));
  }

  onSelectHeaderTab = (buttonType) => {
    if (buttonType !== this.state.selectedTab) {
      this.setState({ selectedTab: buttonType });
    }
  };

  onApprovalButtonClick = (type) => {
    console.log(`on ${type} button button click`);
    this.selectTab(BUTTON_TYPE.REVIEWS, type);
  };

  onReviewButtonClick = () => {
    console.log('On review button click');
    this.selectTab(BUTTON_TYPE.REVIEWS);
  }

  onReviewSubmitClick = () => {
    console.log('On review submit click');
  }

  getStaticDataUrlForPlatform = () => (
    this.props.config
      ? this.props.config.getStaticDataUrlForPlatform(this.props.match.params.platform)
      : null
  )

  onReviewFilterChange = (show, filterBy) => {
    this.props.dispatch(applyReviewFilters(
      this.props.gamerData.reviewsCardRecord.applyReviewsFilter(show, filterBy),
    ));
  }

  selectTab = (tabType, preselect = null) => {
    if (this.state.selectedTab !== tabType) {
      this.setState({
        preselect,
        selectedTab: tabType,
      });
    }
  }

  doSearchPlayer = (gamer) => {
    this.props.history.push(getGamerDetailsUrl(
      this.props.gamerData.platform,
      this.props.gamerData.region,
      this.props.gamerData.gameCode,
      gamer,
    ));
    this.props.dispatch(loadGamerDetails(
      this.props.gamerData.platform,
      this.props.gamerData.region,
      this.props.gamerData.gameCode,
      gamer,
    ));
  }

  renderGamerDetailsContent = () => {
    let content = null;
    if (this.state.selectedTab === BUTTON_TYPE.OVERVIEW) {
      content = (<CardsTab
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
      />);
    } else if (this.state.selectedTab === BUTTON_TYPE.REVIEWS) {
      content = (<ReviewsTab
        approvalsCardRecord={this.props.gamerData.approvalsCardRecord}
        disapprovalsCardRecord={this.props.gamerData.disapprovalsCardRecord}
        reviewsCardRecord={this.props.gamerData.reviewsCardRecord}
        attributesList={this.props.gamerData.attributesList}
        onReviewSubmitClick={this.onReviewSubmitClick}
        preselect={this.state.preselect}
        onReviewFilterChange={this.onReviewFilterChange}
      />);
    } else if (this.state.selectedTab === BUTTON_TYPE.CHAMPIONS) {
      content = (<ChampionsTab />);
    } else if (this.state.selectedTab === BUTTON_TYPE.LEAGUES) {
      content = (<LeaguesTab />);
    } else if (this.state.selectedTab === BUTTON_TYPE.LIVE_MATCH) {
      content = (<LiveMatchTab />);
    }

    return content;
  };

  render() {
    return (
      <React.Fragment>
        {this.props.loading
          && <GamerSkeleton />
        }
        {(!this.props.loading && this.props.gamerData)
          && <div style={styles.container}>
            <NavHeader
              selectedTab={this.state.selectedTab}
              gamertag={this.props.gamerData.gamertag}
              gamerLevel={this.props.gamerData.level}
              region={this.props.gamerData.region}
              gamerIconUrl={this.props.gamerData.gamerIconUrl}
              onSelectTab={this.onSelectHeaderTab}
            />
            {this.renderGamerDetailsContent()}
          </div>
        }
        {(!this.props.loading && !this.props.gamerData)
          && <GamerNotFound />
        }
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps)(GamerDetails),
);
