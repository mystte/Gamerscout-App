import { Record } from 'typed-immutable';

const defaultProps = {
  approvalsCount: Number,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class ApprovalsCardRecord extends ExtendsWith(Record(defaultProps, 'ApprovalsCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      approvalsCount: (data.rep_review_count) ? data.rep_review_count : 0,
    };
    return new ApprovalsCardRecord(parsedData);
  }

  getCount() {
    return this.approvalsCount;
  }
}