import Immutable from 'immutable';
import {
  APP,
  loading,
  success,
  error,
} from '../actions/actionTypes';

// Default state
export const initialState = Immutable.fromJS({
  data: null,
  loading: false,
  error: null,
});

export default function reducer(state = initialState, action) {
  const { type } = action;
  switch (type) {
    case APP.TOGGLE_POPUP:
      return state.withMutations((mutate) => {
        mutate.setIn(['data', 'popupData', 'showPopup'],
          action.parameters.forceDisplay
            ? action.parameters.forceDisplay
            : !state.getIn(['data', 'popupData', 'showPopup']));
        mutate.setIn(['data', 'popupData', 'type'], action.parameters.type);
        if (action.parameters.params) mutate.setIn(['data', 'popupData', 'params'], action.parameters.params);
        mutate.set('error', null);
      });

    case loading(APP.LOAD):
    case loading(APP.DO_LOGIN):
    case loading(APP.DO_LOGOUT):
    case loading(APP.DO_SIGNUP):
    case loading(APP.DO_UPDATE_USER):
    case loading(APP.DO_CONFIRM_PASSWORD):
    case loading(APP.DO_UPDATE_PASSWORD):
    case loading(APP.DO_VALIDATE_ACCOUNT):
      return state.withMutations((mutate) => {
        mutate.set('loading', true);
        mutate.set('error', null);
      });

    case success(APP.LOAD):
      return state.withMutations((mutate) => {
        mutate.set('data', action.data);
        mutate.set('loading', false);
        mutate.set('error', null);
      });

    case success(APP.DO_LOGIN):
      return state.withMutations((mutate) => {
        mutate.setIn(['data', 'user'], action.data);
        mutate.setIn(['data', 'isAuthenticated'], true);
        mutate.set('loading', false);
        mutate.set('error', null);
      });

    case success(APP.DO_DISCONNECT_FACEBOOK):
      return state.setIn(['data', 'user', 'facebookId'], null);

    case success(APP.DO_LOGOUT):
      return state.withMutations((mutate) => {
        mutate.setIn(['data', 'isAuthenticated'], false);
        mutate.setIn(['data', 'user'], null);
        mutate.set('loading', false);
        mutate.set('error', null);
      });

    case success(APP.DO_UPDATE_USER):
      console.log(' user updated = ', state.getIn(['data', 'user']).updateUser(action.data), typeof (state.getIn(['data', 'user']).updateUser(action.data)));
      return state.withMutations((mutate) => {
        mutate.set('loading', false);
        mutate.setIn(['data', 'user'], state.getIn(['data', 'user']).updateUser(action.data));
        mutate.set('error', null);
      });

    case success(APP.DO_VALIDATE_ACCOUNT):
      return state.withMutations((mutate) => {
        mutate.set('loading', false);
        mutate.set('error', null);
        mutate.setIn(['data', 'user'], state.getIn(['data', 'user']).validateUserAccount(action.data));
      });

    case error(APP.LOAD):
    case error(APP.DO_LOGIN):
    case error(APP.DO_LOGOUT):
    case error(APP.DO_SIGNUP):
    case error(APP.DO_UPDATE_USER):
    case error(APP.DO_CONFIRM_PASSWORD):
    case error(APP.DO_UPDATE_PASSWORD):
    case error(APP.DO_VALIDATE_ACCOUNT):
      console.log('ACTION ERROR = ', action);
      return state.withMutations((mutate) => {
        mutate.set('loading', false);
        mutate.set('error', action.error);
      });

    case APP.CLEAR_ERROR:
      return state.set('error', null);

    default:
  }

  return state;
}
