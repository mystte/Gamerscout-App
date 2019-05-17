import { Record, List } from 'typed-immutable';

import ReviewRecord from './ReviewRecord';

const defaultProps = {
  reviews: List(ReviewRecord),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class ReviewsCardRecord extends ExtendsWith(Record(defaultProps, 'ReviewsCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      reviews: data.reviews ? data.reviews.map((reviewData) => {
        return ReviewRecord.apiParser(reviewData);
      }) : [],
    };

    return new ReviewsCardRecord(parsedData);
  }
}