import React from 'react';
import PropTypes from 'prop-types';
import Localization from '../../../../../../../../../../config/localization/Localization';

import styles from './styles';
import { TRENDS_LINE_TYPE } from '../../../../../../../../../../datamanager/models/TrendsCardRecord';

const TrendTip = ({
  gamertag,
  data,
  getColor,
}) => {
  const labels = Localization.Labels.gamerDetails.trendsCard;

  const renderCircleLegend = (id) => {
    const circleLegendStyle = {
      ...styles.circleLegend,
      backgroundColor: getColor(id),
    };

    return (<span style={circleLegendStyle}></span>);
  };

  const renderKdaRow = (id, value) => (
    <div style={styles.kdaRow}>
      {renderCircleLegend(id)}
      {id === TRENDS_LINE_TYPE.KDA
        && <span>{gamertag}:</span>}
      {id === TRENDS_LINE_TYPE.TEAM_KDA
        && <span>{labels.teamAvg}:</span>}
      <span style={styles.avgValue}>{value}</span>
    </div>
  );

  return (
    <div style={styles.container}>
      {renderKdaRow(data[0].id, data[0].value)}
      {data[1]
        && renderKdaRow(data[1].id, data[1].value)
    }
    </div>
  );
};

TrendTip.propTypes = {
  gamertag: PropTypes.string,
  getColor: PropTypes.func,
  data: PropTypes.array,
};

TrendTip.defaultProps = {
  gamertag: null,
  getColor: null,
  data: null,
};

export default TrendTip;
