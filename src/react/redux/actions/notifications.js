
import { NOTIFICATIONS } from './actionTypes';

export function pushNotification(notificationRecord) {
  return {
    type: NOTIFICATIONS.PUSH,
    parameters: {
      record: notificationRecord,
    },
  };
}

export default null;
