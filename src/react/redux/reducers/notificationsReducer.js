import Immutable from 'immutable';
import NotificationsManagerRecord from '../../datamanager/models/NotificationsManagerRecord';
import { NOTIFICATIONS } from '../actions/actionTypes';

// Default state
export const initialState = Immutable.fromJS({
  notificationsManagerRecord: NotificationsManagerRecord.apiParser({}),
  loading: false,
  error: null,
});

export default function reducer(state = initialState, action) {
  const { type, parameters } = action;

  switch (type) {
    case NOTIFICATIONS.PUSH:
      return state.set(
        'notificationsManagerRecord',
        state.get('notificationsManagerRecord').push(parameters.record)
      );

    case NOTIFICATIONS.DELETE:
      return state.set(
        'notificationsManagerRecord',
        state.get('notificationsManagerRecord').delete(parameters.idx)
      );

    default:
  }

  return state;
}
