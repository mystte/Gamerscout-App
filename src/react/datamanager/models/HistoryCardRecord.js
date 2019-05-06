import { Record } from 'typed-immutable';

const defaultProps = {
  gameType: String,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class HistoryCardRecord extends ExtendsWith(Record(defaultProps, 'HistoryCardRecord')) {

}