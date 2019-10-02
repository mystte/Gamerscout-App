import React from 'react';
import PropTypes from 'prop-types';

import TrendsCardRecord from '../../../../../../../../datamanager/models/TrendsCardRecord';
import Localization from '../../../../../../../../config/localization/Localization';

import styles from './styles';

const TrendsCard = () => {
  const labels = Localization.Labels.gamerDetails.trendsCard;

  // const data = {
  //   columns: [
  //     ['data1', 30, 200, 100, 400, 150, 250],
  //     ['data2', 50, 20, 10, 40, 15, 25],
  //   ],
  // };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>{labels.title}</div>
      </div>
    </div>
  );
};

TrendsCard.propTypes = {
  trendsCardRecord: PropTypes.instanceOf(TrendsCardRecord),
};

TrendsCard.defaultProps = {
  trendsCardRecord: null,
};

export default TrendsCard;
