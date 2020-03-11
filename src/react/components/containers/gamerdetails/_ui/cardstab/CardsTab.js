import React from 'react';
import PropTypes from 'prop-types';

import RankedCard from './_ui/cards/rankedcard/RankedCard';
import RecentPerformanceCard from './_ui/cards/recentperformancecard/RecentPerformanceCard';
import ApprovalsCard from './_ui/cards/approvalscard/ApprovalsCard';
import TrendsCard from './_ui/cards/trendscard/TrendsCard';
import ChampionsCard from './_ui/cards/championscard/ChampionsCard';
import ReviewsCard from './_ui/cards/reviewscard/ReviewsCard';

import RankedCardRecord from '../../../../../datamanager/models/RankedCardRecord';
import ApprovalsCardRecord, {
  APPROVAL_TYPE,
} from '../../../../../datamanager/models/ApprovalsCardRecord';
import DisapprovalsCardRecord from '../../../../../datamanager/models/DisapprovalsCardRecord';
import ReviewsCardRecord from '../../../../../datamanager/models/ReviewsCardRecord';
import MathHistoryCardsList from './_ui/cards/matchhistorycardslist/MatchHistoryCardsList';
import HistoryListRecord from '../../../../../datamanager/models/HistoryListRecord';
import ChampionsCardRecord from '../../../../../datamanager/models/ChampionsCardRecord';
import TrendsCardRecord from '../../../../../datamanager/models/TrendsCardRecord';
import UseMediaQueries from '../../../../views/hooks/UseMediaQueries';

import styles from './styles';

const CardsTab = ({
  gameCode,
  gamertag,
  platform,
  rankedCardRecord,
  championsCardRecord,
  approvalsCardRecord,
  disapprovalsCardRecord,
  reviewsCardRecord,
  historyCardList,
  trendsCardRecord,
  onApprovalButtonClick,
  onReviewButtonClick,
  staticDataUrl,
  doSearchPlayer,
}) => {
  const { getResponsiveStyle } = UseMediaQueries();

  if (
    !rankedCardRecord ||
    !trendsCardRecord ||
    !approvalsCardRecord ||
    !reviewsCardRecord
  )
    return null;

  return (
    <div style={styles[getResponsiveStyle('container')]}>
      <div style={styles[getResponsiveStyle('firstRow')]}>
        <RankedCard
          gameCode={gameCode}
          platform={platform}
          rankedCardRecord={rankedCardRecord}
        />
        <RecentPerformanceCard />
        <TrendsCard trendsCardRecord={trendsCardRecord} gamertag={gamertag} />
      </div>
      <div style={styles[getResponsiveStyle('secondRow')]}>
        <div style={styles[getResponsiveStyle('leftColumn')]}>
          <ChampionsCard
            staticDataUrl={staticDataUrl}
            championsCardRecord={championsCardRecord}
          />
          <div style={styles.rateContainer}>
            <ApprovalsCard
              approvalsCardRecord={approvalsCardRecord}
              type={APPROVAL_TYPE.APPROVAL}
              onClick={onApprovalButtonClick}
            />
            <ApprovalsCard
              approvalsCardRecord={disapprovalsCardRecord}
              type={APPROVAL_TYPE.DISAPPROVAL}
              onClick={onApprovalButtonClick}
            />
          </div>
          <ReviewsCard
            reviewsCardRecord={reviewsCardRecord}
            onReviewButtonClick={onReviewButtonClick}
          />
        </div>
        <div style={styles[getResponsiveStyle('historyColumn')]}>
          <MathHistoryCardsList
            doSearchPlayer={doSearchPlayer}
            historyCardList={historyCardList}
            staticDataUrl={staticDataUrl}
          />
        </div>
      </div>
    </div>
  );
};

CardsTab.propTypes = {
  gameCode: PropTypes.string,
  gamertag: PropTypes.string,
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

CardsTab.defaultProps = {
  platform: null,
  gameCode: null,
  gamertag: null,
  rankedCardRecord: null,
  approvalsCardRecord: null,
  historyCardList: null,
  reviewsCardRecord: null,
  onApprovalButtonClick: null,
  championsCardRecord: null,
  staticDataUrl: null,
};

export default CardsTab;
