/* eslint-disable no-use-before-define */
import { Record, List } from 'typed-immutable';

import NotificationRecord from './NotificationRecord';

const defaultProps = {
  notifList: List(NotificationRecord),
};

const ExtendsWith = superclass =>
  class extends superclass {
    push = record => {
      const newNotifyList = this.get('notifList').push(record);
      return NotificationsManagerRecord.apiParser({
        notifList: newNotifyList,
      });
    };

    delete = idx => {
      const newNotifyList = this.notifList.delete(idx);
      return NotificationsManagerRecord.apiParser({
        notifList: newNotifyList,
      });
    };

    static get defaultProps() {
      return defaultProps;
    }

    static get ExtendsWith() {
      return ExtendsWith;
    }
  };

export default class NotificationsManagerRecord extends ExtendsWith(
  Record(defaultProps, 'NotificationsManagerRecord')
) {
  static apiParser(data) {
    const parsedData = {
      notifList: data.notifList ? data.notifList : [],
    };

    return new NotificationsManagerRecord(parsedData);
  }
}
