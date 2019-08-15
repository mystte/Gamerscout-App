import { Record, Maybe, List } from 'typed-immutable';

import AttributeRecord from './AttributeRecord';

export const REVIEW_TYPE = {
  APPROVAL: 'REVIEW_TYPE_APPROVAL',
  DISAPPROVAL: 'REVIEW_TYPE_DISAPPROVAL',
};

const defaultProps = {
  comment: Maybe(String),
  reviewerName: Maybe(String),
  date: Maybe(Date),
  type: Maybe(String),
  attributes: Maybe(List(AttributeRecord)),
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class ReviewRecord extends ExtendsWith(Record(defaultProps, 'ReviewsCardRecord')) {
  static parseAttributes(attributes) {
    return attributes.map((attribute) => (
      AttributeRecord.apiParser({
        ...attribute,
        frequency: 1,
      })));
  }

  static apiParser(data) {
    const parsedData = {
      comment: data.comment ? data.comment : null,
      reviewerName: data.username ? data.username : null,
      date: data.date ? data.date : null,
      type: data.review_type === 'REP' ? REVIEW_TYPE.APPROVAL : REVIEW_TYPE.DISAPPROVAL,
      attributes: ReviewRecord.parseAttributes(data.tags),
    };

    return new ReviewRecord(parsedData);
  }
}
