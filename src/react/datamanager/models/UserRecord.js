/* eslint-disable no-use-before-define */
import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  id: Maybe(String),
  firstName: Maybe(String),
  lastName: Maybe(String),
  gender: Maybe(String),
  email: Maybe(String),
  emailToValidate: Maybe(String),
  username: Maybe(String),
  validated: Boolean,
  sessionId: String,
  facebookEmail: Maybe(String),
  facebookId: Maybe(Number),
};

const ExtendsWith = (superclass) => class extends superclass {
  updateUser = (data) => new UserRecord(this.withMutations((mutate) => {
    if (data.email) {
      mutate.set('email', data.email);
      mutate.set('validated', false);
    }
    if (data.firstName) mutate.set('firstName', data.firstName);
    if (data.lastName) mutate.set('lastName', data.lastName);
    if (data.gender) mutate.set('gender', data.gender);
    if (data.username) mutate.set('username', data.username);
  }));

  validateUserAccount = () => new UserRecord(this.withMutations((mutate) => {
    mutate.set('validated', true);
    mutate.set('email', mutate.get('emailToValidate'));
    mutate.set('emailToValidate', null);
  }));

  getLinkedAccountNumber = () => {
    let count = 0;

    if (this.facebookId) count += 1;

    return count;
  }

  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class UserRecord extends ExtendsWith(Record(defaultProps, 'UserRecord')) {
  static apiParser(data) {
    const parsedData = {
      id: data._id ? data._id : null,
      firstName: data.first_name ? data.first_name : null,
      lastName: data.last_name ? data.last_name : null,
      gender: data.gender ? data.gender : null,
      email: data.email ? data.email : null,
      facebookEmail: data.facebookEmail ? data.facebookEmail : null,
      emailToValidate: data.emailToValidate ? data.emailToValidate : null,
      username: data.username ? data.username : null,
      validated: data.validated ? data.validated : false,
      sessionId: data['gamerscout-api-session'] ? data['gamerscout-api-session'] : null,
      facebookId: data.facebook_id ? data.facebook_id : null,
    };

    return new UserRecord(parsedData);
  }
}
