import { Record } from 'typed-immutable';

const defaultProps = {
  disapprovalsCount: Number,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class DisapprovalsCardRecord extends ExtendsWith(Record(defaultProps, 'DisapprovalsCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      disapprovalsCount: (data.flame_review_count) ? data.flame_review_count : 0,
    };
    return new DisapprovalsCardRecord(parsedData);
  }

  getCount() {
    return this.disapprovalsCount;
  }
}