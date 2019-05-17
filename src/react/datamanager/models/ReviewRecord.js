import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  comment: Maybe(String),
  reviewerName: Maybe(String),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class ReviewsCardRecord extends ExtendsWith(Record(defaultProps, 'ReviewsCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      comment: data.comment ? data.comment : null,
      reviewerName: data.username ? data.username : null,
    }

    return new ReviewsCardRecord(parsedData);
  }
}