import React from 'react';

import RankedCardSkeleton from './_ui/rankedcardskeleton/RankedCardSkeleton';
import ApprovalsCardSkeleton from './_ui/approvalscardskeleton/ApprovalsCardSkeleton';
import RecentPerformanceCardSkeleton from './_ui/recentperformancecardskeleton/RecentPerformanceCardSkeleton';
import StatsCardSkeleton from './_ui/statscardskeleton/StatsCardSkeleton';
import TrendsCardSkeleton from './_ui/trendscardskeleton/TrendsCardSkeleton';
import MatchHistory from './_ui/matchhistoryskeleton/MatchHistorySkeleton';
import Rectangle from './_ui/rectangle/Rectangle';
import Circle from './_ui/circle/Circle';
import styles from './styles';

const GamerSkeleton = () => (
  <div style={styles.container}>
    <div style={styles.navHeader}>
      <div style={styles.navTop}>
        <div style={styles.avatar}>
          <Circle radius={32.5} />
        </div>
        <div>
          <div style={styles.avatarName}><Rectangle width={134} height={19} /></div>
          <Rectangle width={46} height={12} />
        </div>
        <div style={styles.reviewButton}><Rectangle width={109} height={36} /></div>
      </div>
      <div style={styles.navBottom} />
    </div>
    <div style={styles.firstRow}>
      <RankedCardSkeleton />
      <RecentPerformanceCardSkeleton />
      <TrendsCardSkeleton />
    </div>
    <div style={styles.secondRow}>
      <div style={styles.leftColumn}>
        <StatsCardSkeleton />
        <div style={styles.approvalsContainer}>
          <div style={styles.approvalCard}><ApprovalsCardSkeleton /></div>
          <div style={styles.disapprovalCard}><ApprovalsCardSkeleton /></div>
        </div>
        <StatsCardSkeleton />
      </div>
      <div style={styles.historyColumn}>
        <MatchHistory />
        <MatchHistory />
        <MatchHistory />
        <MatchHistory />
        <MatchHistory />
      </div>
    </div>
  </div>
);

export default GamerSkeleton;
