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
        mutate.setIn(['data', 'popupData', 'showPopup'], !state.getIn(['data', 'popupData', 'showPopup']));
        mutate.setIn(['data', 'popupData', 'type'], action.parameters.type);
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

    case error(APP.LOAD):
      return state.withMutations((mutate) => {
        mutate.set('data', null);
        mutate.set('loading', false);
        mutate.set('error', action.error);
      });

    default:
  }

  return state;
}
