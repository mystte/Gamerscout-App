import { Record, List } from 'typed-immutable';
import TrendDataRecord from './TrendDataRecord';

const defaultProps = {
  data: List(TrendDataRecord),
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class TrendsCardRecord extends ExtendsWith(Record(defaultProps, 'TrendsCardRecord')) {
  static apiParser(apiData) {
    const parsedData = {
      data: apiData
        .filter((dataToFilter) => dataToFilter !== null)
        .map((apiTrendData) => (TrendDataRecord.apiParser(apiTrendData))),
    };

    return new TrendsCardRecord(parsedData);
  }
}
