import { Record, Maybe } from 'typed-immutable';

import Localization from '../../config/localization/Localization';

export const NOTIFICATION_TYPE = {
  DEFAULT: 'NOTIFICATION_DEFAULT',
  WARNING: 'NOTIFICATION_WARNING',
  ALERT: 'NOTIFICATION_ALERT',
  SUCCESS: 'NOTIFICATION_SUCCESS',
};

export const MOCKED_NOTIFICATION = {
  INVALID_ACCOUNT: 'invalidAccount',
}

const defaultProps = {
  title: Maybe(String),
  type: Maybe(String),
  show: Maybe(Boolean),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class NotificationRecord extends ExtendsWith(Record(defaultProps, 'NotificationRecord')) {
  static apiParser(data) {
    const parsedData = {
      title: data.title ? data.title : null,
      type: data.type ? data.type : NOTIFICATION_TYPE.DEFAULT,
      show: data.show ? data.show : true,
    };

    return new NotificationRecord(parsedData);
  }

  static getMockedNotif(type) {
    const labels = Localization.Labels.notifications;
    let notificationData = null;

    switch(type) {
      case MOCKED_NOTIFICATION.INVALID_ACCOUNT:
        notificationData = {
          title: labels.invalidAccount.title,
          display: true,
          type: NOTIFICATION_TYPE.DEFAULT,
        };
      break;
    }

    return NotificationRecord.apiParser(notificationData);
  }
}
