import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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
            <DropDown contentList={[]} />
          </div>
          <div style={styles.championsFilter}>
            <DropDown contentList={[]} />
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
