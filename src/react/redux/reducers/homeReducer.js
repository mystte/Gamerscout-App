import Immutable from 'immutable';
import { HOME, success } from '../actions/actionTypes';

// Default state
export const initialState = Immutable.fromJS({
  data: null,
  loading: false,
  error: null,
});

export default function reducer(state = initialState, action) {
  const { type, data } = action;

  switch (type) {
    case success(HOME.LOAD):
      return state.set('data', { homeRecord: data });
    default:
  }

  return state;
}
