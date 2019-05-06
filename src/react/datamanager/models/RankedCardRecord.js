import { Record, List } from 'typed-immutable';
import RankedCardTabRecord from './RankedCardTabRecord';

const defaultProps = {
  tabsList: List(RankedCardTabRecord),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class RankedCardRecord extends ExtendsWith(Record(defaultProps, 'RankedCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      tabsList: data.map((tabData, idx) => {
        return RankedCardTabRecord.apiParser(tabData, idx === 0);
      }),
    };

    return new RankedCardRecord(parsedData);
  }
}