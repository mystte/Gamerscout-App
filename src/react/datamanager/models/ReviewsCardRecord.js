import { Record } from 'typed-immutable';

const defaultProps = {
  review: String,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class ReviewsCardRecord extends ExtendsWith(Record(defaultProps, 'ReviewsCardRecord')) {

}