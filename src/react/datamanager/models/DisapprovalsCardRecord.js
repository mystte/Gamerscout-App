import { Record } from 'typed-immutable';

const defaultProps = {
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class DisapprovalsCardRecord extends ExtendsWith(Record(defaultProps, 'DisapprovalsCardRecord')) {

}