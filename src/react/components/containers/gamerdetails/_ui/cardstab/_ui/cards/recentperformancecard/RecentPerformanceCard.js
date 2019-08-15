import React, { PureComponent } from 'react';

import Localization from '../../../../../../../../config/localization/Localization';
import DropDown from '../../../../../../../views/elements/dropdown/DropDown';
import styles from './styles';

class RecentPerformanceCard extends PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const labels = Localization.Labels.gamerDetails.recentPerformanceCard;

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.positionsFilter}>
            <DropDown options={[
              { name: 'All Positions' },
            ]} />
          </div>
          <div style={styles.championsFilter}>
            <DropDown options={[
              { name: 'All Champions' },
            ]} />
          </div>
        </div>
        <div style={styles.content}>
          <div style={styles.title}>{labels.title}</div>
        </div>
      </div>
    );
  }
}

export default RecentPerformanceCard;
