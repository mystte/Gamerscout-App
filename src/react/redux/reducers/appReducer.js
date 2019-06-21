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
          action.parameters.forceDisplay ?
          action.parameters.forceDisplay :
          !state.getIn(['data', 'popupData', 'showPopup']));
        mutate.setIn(['data', 'popupData', 'type'], action.parameters.type);
        mutate.set('error', null);
      });

    case loading(APP.LOAD):
      return state.withMutations((mutate) => {
        mutate.set('data', null);
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

    case success(APP.DO_LOGOUT):
      return state.withMutations((mutate) => {
        mutate.setIn(['data', 'isAuthenticated'], false);
        mutate.setIn(['data', 'user'], null);
      });

    case error(APP.LOAD):
    case error(APP.DO_LOGIN):
    case error(APP.DO_LOGOUT):
      return state.withMutations((mutate) => {
        mutate.set('loading', false);
        mutate.set('error', action.error);
      });

    default:
  }

  return state;
}
