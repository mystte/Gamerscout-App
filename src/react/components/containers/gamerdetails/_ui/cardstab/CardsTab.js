import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RankedCard from './_ui/cards/rankedcard/RankedCard';
import RecentPerformanceCard from './_ui/cards/recentperformancecard/RecentPerformanceCard';
import ApprovalsCard, { APPROVAL_TYPE } from './_ui/cards/approvalscard/ApprovalsCard';
import TrendsCard from './_ui/cards/trendscard/TrendsCard';
import RankedCardRecord from '../../../../../datamanager/models/RankedCardRecord';
import ApprovalsCardRecord from '../../../../../datamanager/models/ApprovalsCardRecord';
import DisapprovalsCardRecord from '../../../../../datamanager/models/DisapprovalsCardRecord';
import styles from './styles';

class CardsTab extends PureComponent {
  static propTypes = {
    gameCode: PropTypes.string,
    platform: PropTypes.string,
    rankedCardRecord: PropTypes.instanceOf(RankedCardRecord),
    approvalsCardRecord: PropTypes.instanceOf(ApprovalsCardRecord),
    disapprovalsCardRecord: PropTypes.instanceOf(DisapprovalsCardRecord),
    onApprovalButtonClick: PropTypes.func,
  };

  static defaultProps = {
    rankedCardRecord: null,
    platform: null,
    gameCode: null,
    rankedCardRecord: null,
    approvalsCardRecord: null,
    onApprovalButtonClick: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (!this.props.rankedCardRecord) return null;

    return (
      <div style={styles.container}>
        <div style={styles.firstRow}>
          <RankedCard
            gameCode={this.props.gameCode}
            platform={this.props.platform}
            rankedCardRecord={this.props.rankedCardRecord}
          />
          <RecentPerformanceCard />
          <TrendsCard />
        </div>
        <div style={styles.secondRow}>
          <div style={styles.leftColumn}>
            <div style={styles.rateContainer}>
              <ApprovalsCard
                approvalsCardRecord={this.props.approvalsCardRecord}
                type={APPROVAL_TYPE.APPROVALS}
                onClick={this.props.onApprovalButtonClick}
              />
              <ApprovalsCard
                approvalsCardRecord={this.props.disapprovalsCardRecord}
                type={APPROVAL_TYPE.DISAPPROVALS}
                onClick={this.props.onApprovalButtonClick}
              />
            </div>
          </div>
          <div style={styles.reviewsColumn}>

          </div>
        </div>
      </div>
    );
  }
}

export default CardsTab;
