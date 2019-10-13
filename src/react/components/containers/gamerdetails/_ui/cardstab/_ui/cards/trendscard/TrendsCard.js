/* eslint-disable react/display-name */
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Chart from 'react-c3-component';
import 'c3/c3.css';

import TrendTip from './_ui/trendtip/TrendTip';
import TrendsCardRecord from '../../../../../../../../datamanager/models/TrendsCardRecord';
import Localization from '../../../../../../../../config/localization/Localization';

import styles from './styles';
import { colorNameToHex } from '../../../../../../../../utils/color';

const TrendsCard = ({
  trendsCardRecord,
  gamertag,
}) => {
  const labels = Localization.Labels.gamerDetails.trendsCard;
  const data = {
    columns: trendsCardRecord.getChartData(),
  };

  console.log(data);
  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>{labels.title}</div>
        <div style={styles.chartContainer}>
          <Chart
            config={{
              data,
              size: {
                width: 350,
                height: 90,
              },
              axis: {
                x: {
                  show: false,
                },
                y: {
                  show: false,
                },
              },
              legend: {
                show: false,
              },
              color: {
                pattern: [colorNameToHex('curiousblue'), colorNameToHex('melrose')],
              },
              tooltip: {
                contents: (d, defaultTitleFormat, defaultValueFormat, color) => (
                  ReactDOMServer.renderToStaticMarkup(
                    <TrendTip
                      gamertag={gamertag}
                      getColor={color}
                      data={d}
                    />,
                  )),
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

TrendsCard.propTypes = {
  trendsCardRecord: PropTypes.instanceOf(TrendsCardRecord),
  gamertag: PropTypes.string,
};

TrendsCard.defaultProps = {
  trendsCardRecord: null,
  gamertag: null,
};

export default TrendsCard;
