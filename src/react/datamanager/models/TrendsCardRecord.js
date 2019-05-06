import { Record, Maybe } from 'typed-immutable';
import { List } from 'immutable';

const defaultProps = {
  data: Maybe(List),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class TrendsCardRecord extends ExtendsWith(Record(defaultProps, 'TrendsCardRecord')) {

}