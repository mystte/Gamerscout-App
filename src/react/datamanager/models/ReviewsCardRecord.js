import { Record, List } from 'typed-immutable';
import moment from 'moment';

import ReviewRecord, { REVIEW_TYPE } from './ReviewRecord';

export const REVIEW_FILTER = {
  SHOW_ALL: 'REVIEW_FILTER_SHOW_ALL',
  SHOW_APPROVALS: 'REVIEW_FILTER_SHOW_APPROVALS',
  SHOW_DISAPPROVALS: 'REVIEW_FILTER_SHOW_DISAPPROVALS',
  NEWEST: 'REVIEW_FILTER_NEWEST',
  OLDEST: 'REVIEW_FILTER_OLDEST',
};

const defaultProps = {
  reviews: List(ReviewRecord),
  filtered: List(ReviewRecord),
};

const ExtendsWith = (superclass) => class extends superclass {
  applyReviewsFilter(show, filterBy) {
    let updatedFilteredReviews = this.reviews;

    if (show === REVIEW_FILTER.SHOW_APPROVALS) {
      updatedFilteredReviews = this.reviews.filter((review) => (
        review.type === REVIEW_TYPE.APPROVAL
      ));
    } else if (show === REVIEW_FILTER.SHOW_DISAPPROVALS) {
      updatedFilteredReviews = this.reviews.filter((review) => (
        review.type === REVIEW_TYPE.DISAPPROVAL
      ));
    }

    updatedFilteredReviews = updatedFilteredReviews.sort((a, b) => {
      if (filterBy === REVIEW_FILTER.NEWEST) {
        return moment(b.date).valueOf() - moment(a.date).valueOf();
      }
      return moment(a.date).valueOf() - moment(b.date).valueOf();
    });

    return this.set('filtered', updatedFilteredReviews);
  }

  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class ReviewsCardRecord extends ExtendsWith(Record(defaultProps, 'ReviewsCardRecord')) {
  static apiParser(data) {
    const reviewsList = data.reviews
      ? data.reviews.map((reviewData) => ReviewRecord.apiParser(reviewData))
      : [];

    const parsedData = {
      reviews: reviewsList,
      filtered: reviewsList,
    };

    return new ReviewsCardRecord(parsedData);
  }
}
