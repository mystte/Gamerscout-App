import { Record } from 'typed-immutable';

const defaultProps = {
  title: String,
  rank: String,
  points: Number,
  wins: Number,
  losses: Number,
  percentage: Number,
  selected: false,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class RankedCardRecord extends ExtendsWith(Record(defaultProps, 'RankedCardRecord')) {

}