import React, { PureComponent } from 'react';
import Chart from 'react-c3-component';
import 'c3/c3.css';

import Localization from '../../../../../../../../config/localization/Localization';
import DropDown from '../../../../../../../views/elements/dropdown/DropDown';
import styles from './styles';
import { colorNameToHex } from '../../../../../../../../utils/color';

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
          <div style={styles.dataContainer}>
            <div style={styles.donutContainer}>
              <div style={styles.winsPercentage}>70%</div>
              <Chart
                config={{
                  data: {
                    columns: [
                      ['wins', 70],
                      ['losses', 30],
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
              <span style={styles.winsLabel}>20{labels.wins}/5{labels.losses}</span>
            </div>
            <div style={styles.kdaContainer}>
              <div style={styles.numbers}>
                <span style={styles.kdaNum}>5</span>
                <span style={styles.slash}>/</span>
                <span style={styles.kdaNum}>9</span>
                <span style={styles.slash}>/</span>
                <span style={styles.kdaNum}>10</span>
              </div>
              <div style={styles.kdaLblContainer}>
                <div style={styles.kda}>0.9</div>
                <div style={styles.kdaLbl}>{labels.kda}</div>
              </div>
            </div>
            <div style={styles.csContainer}>
              <div style={styles.cs}>0.9</div>
              <div style={styles.csLbl}>{labels.cs}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RecentPerformanceCard;
