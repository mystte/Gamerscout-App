import { Record, List } from 'typed-immutable';

import NotificationRecord from './NotificationRecord';

const defaultProps = {
  notifList: List(NotificationRecord),
};

const ExtendsWith = (superclass) => class extends superclass {

  push = (record) => {
    return this.set('notifList', this.notifList.push(record));
  }

  pop = () => {

  }

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class NotificationsManagerRecord extends ExtendsWith(Record(defaultProps, 'NotificationsManagerRecord')) {
  static apiParser(data) {
    const parsedData = {
      notifList: data.notifList ? data.notifList : [],
    };

    return new NotificationsManagerRecord(parsedData);
  }
}
