import { Record } from 'typed-immutable';

const defaultProps = {
  username: String,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class UserRecord extends ExtendsWith(Record(defaultProps, 'UserRecord')) {

}
