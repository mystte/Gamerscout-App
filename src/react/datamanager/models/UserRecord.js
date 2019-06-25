import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  firstName: Maybe(String),
  lastName: Maybe(String),
  gender: Maybe(String),
  email: Maybe(String),
  username: Maybe(String),
  validated: Boolean,
  sessionId: String,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class UserRecord extends ExtendsWith(Record(defaultProps, 'UserRecord')) {
  static apiParser(data) {
    const parsedData = {
      firstName: data.first_name ? data.first_name : null,
      lastName: data.last_name ? data.last_name : null,
      gender: data.gender ? data.gender : null,
      email: data.email ? data.email : null,
      username: data.username ? data.username : null,
      validated: data.validated ? data.validated : false,
      sessionId: data['gamerscout-api-session'] ? data['gamerscout-api-session'] : null,
    };

    return new UserRecord(parsedData);
  }
}
