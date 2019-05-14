import { Record, List } from 'typed-immutable';
import Localization from '../../config/localization/Localization';

const defaultProps = {
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class RecentPerformanceCardRecord extends ExtendsWith(Record(defaultProps, 'RecentPerformanceCardRecord')) {
  static apiParser(data) {
    const parsedData = {
    };

    return new RecentPerformanceCardRecord(parsedData);
  }
}