import React from 'react';
import PropTypes from 'prop-types';
import Localization from '../../../../../../../../../../config/localization/Localization';

import styles from './styles';

const TrendTip = ({
  gamertag,
  data,
  getColor,
}) => {
  console.log('gamertag, data', gamertag, data);
  const labels = Localization.Labels.gamerDetails.trendsCard;

  const renderCircleLegend = (id) => {
    const circleLegendStyle = {
      ...styles.circleLegend,
      backgroundColor: getColor(id),
    };

    return (<span style={circleLegendStyle}></span>);
  };

  return (
    <div style={styles.container}>
      <div style={styles.kdaRow}>
        {renderCircleLegend(data[0].id)}
        <span>{gamertag}:</span>
        <span style={styles.avgValue}>{data[0].value}</span>
      </div>
      <div style={styles.kdaRow}>
        {renderCircleLegend(data[1].id)}
        <span>{labels.teamAvg}:</span>
        <span style={styles.avgValue}>{data[1].value}</span>
      </div>
    </div>
  );
};

TrendTip.propTypes = {
  gamertag: PropTypes.string,
  getColor: PropTypes.func,
  data: PropTypes.object,
};

TrendTip.defaultProps = {
  gamertag: null,
  getColor: null,
  data: null,
};

export default TrendTip;
