/* eslint-disable react/display-name */
import React, { useState } from 'react';
import ReactDOMServer from 'react-dom/server';
import PropTypes from 'prop-types';
import Chart from 'react-c3-component';
import 'c3/c3.css';

import TrendTip from './_ui/trendtip/TrendTip';
import TrendsCardRecord, {
  TRENDS_OPTIONS,
} from '../../../../../../../../datamanager/models/TrendsCardRecord';
import Localization from '../../../../../../../../config/localization/Localization';

import styles from './styles';
import { colorNameToHex } from '../../../../../../../../utils/color';
import DropDown, {
  SELECT_TYPE,
} from '../../../../../../../views/elements/dropdown/DropDown';
import useResize from '../../../../../../../views/hooks/UseResize';
import UseMediaQueries from '../../../../../../../views/hooks/UseMediaQueries';
import SVGIcon, {
  IMG_TYPE,
} from '../../../../../../../views/elements/svgicon/SVGIcon';

const TrendsCard = ({ trendsCardRecord, gamertag }) => {
  const { getResponsiveStyle } = UseMediaQueries();
  const labels = Localization.Labels.gamerDetails.trendsCard;
  const [selectedFilter, setSelectedFilter] = useState(
    TRENDS_OPTIONS.TEAM_KDA_VS_KDA
  );
  const { dimensions, targetRef } = useResize();
  const data = {
    columns: trendsCardRecord.getChartData(selectedFilter),
  };

  const onFilterChange = filter => {
    setSelectedFilter(filter.name);
  };

  const getChartLinesColors = () => {
    let result = [colorNameToHex('curiousblue'), colorNameToHex('melrose')];
    if (selectedFilter === TRENDS_OPTIONS.KDA) {
      result = [colorNameToHex('curiousblue')];
    } else if (selectedFilter === TRENDS_OPTIONS.TEAM_KDA) {
      result = [colorNameToHex('melrose')];
    }
    return result;
  };

  return (
    <div ref={targetRef} style={styles[getResponsiveStyle('container')]}>
      <div style={styles.header}>
        <div style={styles.title}>{labels.title}</div>
        <div style={styles.optionsContainer}>
          <DropDown
            uppercase
            selectType={SELECT_TYPE.SIMPLE}
            onChange={onFilterChange}
            options={[
              {
                name: TRENDS_OPTIONS.TEAM_KDA_VS_KDA,
                label: labels.teamKdaVsKda,
              },
              { name: TRENDS_OPTIONS.KDA, label: labels.kda },
              // { name: TRENDS_OPTIONS.TEAM_KDA, label: labels.teamKda },
            ]}
          />
        </div>
        {data.columns[0].length <= 1 && (
          <div style={styles.zeroStateContainer}>
            <SVGIcon
              width={102}
              height={61}
              type={IMG_TYPE.PNG}
              name="no-data-2"
            />
          </div>
        )}
        {data.columns[0].length > 1 && (
          <div style={styles.chartContainer}>
            <Chart
              config={{
                data,
                size: {
                  width: dimensions.width,
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
                  pattern: getChartLinesColors(),
                },
                point: {
                  r: 1,
                },
                tooltip: {
                  contents: (
                    d,
                    defaultTitleFormat,
                    defaultValueFormat,
                    color
                  ) =>
                    ReactDOMServer.renderToStaticMarkup(
                      <TrendTip gamertag={gamertag} getColor={color} data={d} />
                    ),
                },
              }}
            />
          </div>
        )}
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
