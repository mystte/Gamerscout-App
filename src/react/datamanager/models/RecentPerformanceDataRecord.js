import { Record } from 'typed-immutable';

const defaultProps = {
  positionFilter: String,
  championFilter: String,
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class RecentPerformanceDataRecord extends ExtendsWith(Record(defaultProps, 'RecentPerformanceDataRecord')) {
  static apiParser(data) {
    console.log(data);

    const parsedData = {
    };

    return new RecentPerformanceDataRecord(parsedData);
  }
}
