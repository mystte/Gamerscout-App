import { NOTIFICATIONS } from './actionTypes';
import NotificationRecord from '../../datamanager/models/NotificationRecord';

export function pushNotification({ record, title, type, isPersistent }) {
  let notifRecord = record;

  if (!notifRecord) {
    notifRecord = NotificationRecord.createNotif({
      type,
      title,
      isPersistent,
    });
  }

  return {
    type: NOTIFICATIONS.PUSH,

    parameters: {
      record: notifRecord,
    },
  };
}

export function deleteNotification(idx) {
  return {
    type: NOTIFICATIONS.DELETE,
    parameters: {
      idx,
    },
  };
}

export default null;
