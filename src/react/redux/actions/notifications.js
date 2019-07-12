
import { NOTIFICATIONS } from './actionTypes';

export function pushNotification(notificationRecord) {
  return {
    type: NOTIFICATIONS.PUSH,
    parameters: {
      record: notificationRecord,
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
