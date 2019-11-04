import React from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-c3-component';
import 'c3/c3.css';

import Localization from '../../../../../../../../config/localization/Localization';
import DropDown from '../../../../../../../views/elements/dropdown/DropDown';
import styles from './styles';
import { colorNameToHex } from '../../../../../../../../utils/color';

const RecentPerformanceCard = () => {
  const labels = Localization.Labels.gamerDetails.recentPerformanceCard;
  const recentPerformanceRecord = useSelector((state) => state.gamerDetails.getIn(['data', 'recentPerformanceCardRecord']));
  const filteredData = recentPerformanceRecord.getFilteredData();
  console.log('filteredData = ', filteredData);

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
          <div style={styles.dataContainer}>
            <div style={styles.donutContainer}>
              <div style={styles.winsPercentage}>{filteredData.winsPercentage}%</div>
              <Chart
                config={{
                  data: {
                    columns: [
                      ['wins', filteredData.winsPercentage],
                      ['losses', filteredData.lossesPercentage],
                    ],
                    type: 'donut',
                  },
                  tooltip: {
                    show: false,
                  },
                  color: {
                    pattern: [
                      colorNameToHex('mariner'),
                      colorNameToHex('tapestry'),
                    ],
                  },
                  donut: {
                    width: 4,
                    label: {
                      show: false,
                    },
                  },
                  size: {
                    width: 70,
                    height: 70,
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
                }}
              />
            <span style={styles.winsLabel}>
              {filteredData.wins}{labels.wins}/{filteredData.losses}{labels.losses}
            </span>
            </div>
            <div style={styles.kdaContainer}>
              <div style={styles.numbers}>
                <span style={styles.kdaNum}>{filteredData.kills}</span>
                <span style={styles.slash}>/</span>
              <span style={styles.kdaNum}>{filteredData.deaths}</span>
                <span style={styles.slash}>/</span>
                <span style={styles.kdaNum}>{filteredData.assists}</span>
              </div>
              <div style={styles.kdaLblContainer}>
                <div style={styles.kda}>{filteredData.kda}</div>
                <div style={styles.kdaLbl}>{labels.kda}</div>
              </div>
            </div>
            <div style={styles.csContainer}>
            <div style={styles.cs}>{filteredData.cs}</div>
              <div style={styles.csLbl}>{labels.cs}</div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RecentPerformanceCard;
