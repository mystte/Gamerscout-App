import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import TrendsCardRecord from '../../../../../../../../datamanager/models/TrendsCardRecord';
import Localization from '../../../../../../../../config/localization/Localization';

class TrendsCard extends PureComponent {
  static propTypes = {
    gameCode: PropTypes.string,
    platform: PropTypes.string,
    trendsCardRecord: PropTypes.instanceOf(TrendsCardRecord),
  };

  static defaultProps = {
    trendsCardRecord: null,
    platform: null,
    gameCode: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const labels = Localization.Labels.gamerDetails.trendsCard;

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.title}>{labels.title}</div>
        </div>
      </div>
    );
  }
}

export default TrendsCard;
