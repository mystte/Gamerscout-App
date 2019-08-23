import { Record, Maybe } from 'typed-immutable';

import Localization from '../../config/localization/Localization';

export const NOTIFICATION_TYPE = {
  DEFAULT: 'NOTIFICATION_DEFAULT',
  WARNING: 'NOTIFICATION_WARNING',
  ALERT: 'NOTIFICATION_ALERT',
  SUCCESS: 'NOTIFICATION_SUCCESS',
};

export const MOCKED_NOTIFICATION = {
  INVALID_ACCOUNT: 'MOCKED_NOTIF_INVALID_ACCOUNT',
  UPATED_PASSWORD: 'MOCKED_NOTIF_UPDATED_PASSWORD',
  VALIDATION_EMAIL_RESENT: 'MOCKED_NOTIF_VALIDATION_EMAIL_RESENT',
  ACCOUNT_VALIDATED: 'MOCKED_NOTIF_ACCOUNT_VALIDATED',
  WRONG_VALIDATION_TOKEN: 'MOCKED_NOTIF_WRONG_VALIDATION_TOKEN',
  TEST: 'MOCKED_NOTIF_TEST',
};

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

  static createNotif({
    type,
    title,
    isPersistent,
  }) {
    return new NotificationRecord({
      type: (type || NOTIFICATION_TYPE.DEFAULT),
      title,
      isPersistent: (isPersistent || false),
      show: true,
    });
  }

  static getMockedNotif(type) {
    const labels = Localization.Labels.notifications;
    let notificationData = null;

    switch (type) {
      case MOCKED_NOTIFICATION.INVALID_ACCOUNT:
        notificationData = {
          title: labels.invalidAccount.title,
          display: true,
          type: NOTIFICATION_TYPE.DEFAULT,
          isPersistent: false,
        };
        break;

      case MOCKED_NOTIFICATION.UPATED_PASSWORD:
        notificationData = {
          title: labels.updatedPassword.title,
          display: true,
          type: NOTIFICATION_TYPE.SUCCESS,
          isPersistent: false,
        };
        break;

      case MOCKED_NOTIFICATION.TEST:
        notificationData = {
          title: 'test notification',
          display: true,
          type: NOTIFICATION_TYPE.ALERT,
          isPersistent: false,
        };
        break;

      case MOCKED_NOTIFICATION.VALIDATION_EMAIL_RESENT:
        notificationData = {
          title: labels.validationEmailResent.title,
          display: true,
          type: NOTIFICATION_TYPE.DEFAULT,
        };
        break;

      case MOCKED_NOTIFICATION.ACCOUNT_VALIDATED:
        notificationData = {
          title: labels.accountValidated.title,
          display: true,
          type: NOTIFICATION_TYPE.SUCCESS,
        };
        break;

      case MOCKED_NOTIFICATION.WRONG_VALIDATION_TOKEN:
        notificationData = {
          title: labels.wrongValidationToken.title,
          display: true,
          type: NOTIFICATION_TYPE.ALERT,
        };
        break;

      default:
    }

    return NotificationRecord.apiParser(notificationData);
  }
}
