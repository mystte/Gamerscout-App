import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RankedCard from './_ui/cards/rankedcard/RankedCard';
import RecentPerformanceCard from './_ui/cards/recentperformancecard/RecentPerformanceCard';
import TrendsCard from './_ui/cards/trendscard/TrendsCard';
import RankedCardRecord from '../../../../../datamanager/models/RankedCardRecord';
import styles from './styles';

class CardsTab extends PureComponent {
  static propTypes = {
    gameCode: PropTypes.string,
    platform: PropTypes.string,
    rankedCardRecord: PropTypes.instanceOf(RankedCardRecord),
  };

  static defaultProps = {
    rankedCardRecord: null,
    platform: null,
    gameCode: null,
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
      </div>
    );
  }
}

export default CardsTab;
