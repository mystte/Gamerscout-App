import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import { loadGamerDetails } from '../../../redux/actions/gamerDetails';
import { BUTTON_TYPE } from './_ui/navheader/_ui/actionbuttons/_ui/actionbutton/ActionButton';
import NavHeader from './_ui/navheader/NavHeader';
import CardsTab from './_ui/cardstab/CardsTab';
import ReviewsTab from './_ui/reviewstab/ReviewsTab';
import LeaguesTab from './_ui/leaguestab/LeaguesTab';
import LiveMatchTab from './_ui/livematchtab/LiveMatchTab';
import ChampionsTab from './_ui/championstab/ChampionsTab';
import styles from './styles';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  gamerData: state.gamerDetails.get('data'),
  loading: state.gamerDetails.get('loading'),
  error: state.gamerDetails.get('error'),
});
class GamerDetails extends PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: BUTTON_TYPE.OVERVIEW,
    };
  }
  
  componentDidMount() {
    this.props.dispatch(loadGamerDetails(
      this.props.match.params.platform,
      this.props.match.params.region,
      this.props.match.params.game,
      this.props.match.params.gamertag,
    ));
  };

  onSelectHeaderTab = (buttonType) => {
    if (buttonType !== this.state.selectedTab) {
      this.setState({ selectedTab: buttonType });
    }  
  };

  onApprovalButtonClick = (type) => {
    console.log(`on ${type} button button click`);
  };

  renderGamerDetailsContent = () => {
    let content = null;
    if (this.state.selectedTab === BUTTON_TYPE.OVERVIEW) {
      content = (<CardsTab
        gameCode={this.props.gamerData.gameCode}
        platform={this.props.gamerData.platform}
        rankedCardRecord={this.props.gamerData.rankedCardRecord}
        approvalsCardRecord={this.props.gamerData.approvalsCardRecord}
        disapprovalsCardRecord={this.props.gamerData.disapprovalsCardRecord}
        onApprovalButtonClick={this.onApprovalButtonClick}
      />);
    } else if (this.state.selectedTab === BUTTON_TYPE.REVIEWS) {
      content = (<ReviewsTab />);
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
        {this.props.loading &&
          <div>Loading</div>
        }
        {(!this.props.loading && this.props.gamerData) &&
          <div style={styles.container}>
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
        {(!this.props.loading && !this.props.gamerData) &&
          <div>No gamer Found</div>
        }
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps)(GamerDetails)
);
