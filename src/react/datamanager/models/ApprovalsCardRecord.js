import { Record } from 'typed-immutable';

const defaultProps = {
  approvalsCount: Number,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class ApprovalsCardRecord extends ExtendsWith(Record(defaultProps, 'ApprovalsCardRecord')) {

}