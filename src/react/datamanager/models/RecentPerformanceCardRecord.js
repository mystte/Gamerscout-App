import { Record, List, Maybe } from 'typed-immutable';
import RecentPerformanceDataRecord from './RecentPerformanceDataRecord';

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
};

export default class RecentPerformanceCardRecord extends ExtendsWith(Record(defaultProps, 'RecentPerformanceCardRecord')) {
  static apiParser(data) {
    console.log(data);
    const parsedData = {
      positionFilter: RECENT_PERFORMANCE_FILTERS.ALL_POSITIONS,
      championFilter: RECENT_PERFORMANCE_FILTERS.ALL_CHAMPIONS,
    };

    return new RecentPerformanceCardRecord(parsedData);
  }
}
