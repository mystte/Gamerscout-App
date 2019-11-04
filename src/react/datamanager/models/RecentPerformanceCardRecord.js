import { Record, List, Maybe } from 'typed-immutable';

import RecentPerformanceDataRecord from './RecentPerformanceDataRecord';
import { computeKda } from '../../utils/maths';

export const RECENT_PERFORMANCE_FILTERS = {
  ALL_POSITIONS: 'RECENT_PERFORMANCES_ALL_POSITIONS',
  ALL_CHAMPIONS: 'RECENT_PERFORMANCES_ALL_CHAMPIONS',
};

const defaultProps = {
  positionFilter: String,
  championFilter: String,
  recentPerformanceList: Maybe(List(RecentPerformanceDataRecord)),
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }

  getFilteredData() {
    let winsCount = 0;
    let lossesCount = 0;
    let cs = 0;
    let kills = 0;
    let deaths = 0;
    let assists = 0;

    this.recentPerformanceList.forEach((recentPerfData) => {
      if (recentPerfData.win) winsCount += 1;
      else lossesCount += 1;
      cs += recentPerfData.cs;
      kills += recentPerfData.kills;
      deaths += recentPerfData.deaths;
      assists += recentPerfData.assists;
    });

    return {
      winsPercentage: (winsCount * 100) / (winsCount + lossesCount),
      lossesPercentage: (lossesCount * 100) / (winsCount + lossesCount),
      wins: winsCount,
      losses: lossesCount,
      cs,
      kills,
      deaths,
      assists,
      kda: computeKda(kills, assists, deaths),
    };
  }
};

export default class RecentPerformanceCardRecord extends ExtendsWith(Record(defaultProps, 'RecentPerformanceCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      positionFilter: RECENT_PERFORMANCE_FILTERS.ALL_POSITIONS,
      championFilter: RECENT_PERFORMANCE_FILTERS.ALL_CHAMPIONS,
      recentPerformanceList: data.map(
        (matchData) => RecentPerformanceDataRecord.apiParser(matchData),
      ),
    };

    return new RecentPerformanceCardRecord(parsedData);
  }
}
