import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RankedCard from './_ui/cards/rankedcard/RankedCard';
import RecentPerformanceCard from './_ui/cards/recentperformancecard/RecentPerformanceCard';
import ApprovalsCard from './_ui/cards/approvalscard/ApprovalsCard';
import TrendsCard from './_ui/cards/trendscard/TrendsCard';
import ChampionsCard from './_ui/cards/championscard/ChampionsCard';
import ReviewsCard from './_ui/cards/reviewscard/ReviewsCard';

import RankedCardRecord from '../../../../../datamanager/models/RankedCardRecord';
import ApprovalsCardRecord, { APPROVAL_TYPE } from '../../../../../datamanager/models/ApprovalsCardRecord';
import DisapprovalsCardRecord from '../../../../../datamanager/models/DisapprovalsCardRecord';
import ReviewsCardRecord from '../../../../../datamanager/models/ReviewsCardRecord';
import MathHistoryCardsList from './_ui/cards/matchhistorycardslist/MatchHistoryCardsList';
import HistoryListRecord from '../../../../../datamanager/models/HistoryListRecord';
import ChampionsCardRecord from '../../../../../datamanager/models/ChampionsCardRecord';
import TrendsCardRecord from '../../../../../datamanager/models/TrendsCardRecord';

import styles from './styles';

class CardsTab extends PureComponent {
  static propTypes = {
    gameCode: PropTypes.string,
    platform: PropTypes.string,
    rankedCardRecord: PropTypes.instanceOf(RankedCardRecord),
    championsCardRecord: PropTypes.instanceOf(ChampionsCardRecord),
    approvalsCardRecord: PropTypes.instanceOf(ApprovalsCardRecord),
    disapprovalsCardRecord: PropTypes.instanceOf(DisapprovalsCardRecord),
    reviewsCardRecord: PropTypes.instanceOf(ReviewsCardRecord),
    historyCardList: PropTypes.instanceOf(HistoryListRecord),
    trendsCardRecord: PropTypes.instanceOf(TrendsCardRecord),
    onApprovalButtonClick: PropTypes.func,
    onReviewButtonClick: PropTypes.func,
    staticDataUrl: PropTypes.string,
    doSearchPlayer: PropTypes.func.isRequired,
  };

  static defaultProps = {
    platform: null,
    gameCode: null,
    rankedCardRecord: null,
    approvalsCardRecord: null,
    historyCardList: null,
    reviewsCardRecord: null,
    onApprovalButtonClick: null,
    championsCardRecord: null,
    staticDataUrl: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (!this.props.rankedCardRecord
        || !this.props.approvalsCardRecord
        || !this.props.reviewsCardRecord) return null;

    return (
      <div style={styles.container}>
        <div style={styles.firstRow}>
          <RankedCard
            gameCode={this.props.gameCode}
            platform={this.props.platform}
            rankedCardRecord={this.props.rankedCardRecord}
          />
          <RecentPerformanceCard />
          <TrendsCard
            trendsCardRecord={this.props.trendsCardRecord}
          />
        </div>
        <div style={styles.secondRow}>
          <div style={styles.leftColumn}>
            <ChampionsCard
              staticDataUrl={this.props.staticDataUrl}
              championsCardRecord={this.props.championsCardRecord}
            />
            <div style={styles.rateContainer}>
              <ApprovalsCard
                approvalsCardRecord={this.props.approvalsCardRecord}
                type={APPROVAL_TYPE.APPROVAL}
                onClick={this.props.onApprovalButtonClick}
              />
              <ApprovalsCard
                approvalsCardRecord={this.props.disapprovalsCardRecord}
                type={APPROVAL_TYPE.DISAPPROVAL}
                onClick={this.props.onApprovalButtonClick}
              />
            </div>
            <ReviewsCard
              reviewsCardRecord={this.props.reviewsCardRecord}
              onReviewButtonClick={this.props.onReviewButtonClick}
            />
          </div>
          <div style={styles.historyColumn}>
            <MathHistoryCardsList
              doSearchPlayer={this.props.doSearchPlayer}
              historyCardList={this.props.historyCardList}
              staticDataUrl={this.props.staticDataUrl}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CardsTab;
