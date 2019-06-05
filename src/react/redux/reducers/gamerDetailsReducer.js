import Immutable from 'immutable';
import {
  GAMER_DETAILS,
  loading,
  success,
  error,
} from '../actions/actionTypes';

// Default state
export const initialState = Immutable.fromJS({
  data: [],
  loading: false,
  error: null,
});

export default function reducer(state = initialState, action) {
  const { type, parameters } = action;
  switch (type) {
    case loading(GAMER_DETAILS.LOAD):
      return state.withMutations((mutate) => {
        mutate.set('data', null);
        mutate.set('loading', true);
        mutate.set('error', null);
      });

    case success(GAMER_DETAILS.LOAD):
      return state.withMutations((mutate) => {
        mutate.set('data', action.data);
        mutate.set('loading', false);
        mutate.set('error', null);
      });

    case error(GAMER_DETAILS.LOAD):
      return state.withMutations((mutate) => {
        mutate.set('data', null);
        mutate.set('loading', false);
        mutate.set('error', action.error);
      });

    case GAMER_DETAILS.APPLY_REVIEW_FILTERS:
      return state.setIn(['data', 'reviewsCardRecord'], parameters.mutatedReviewRecord);

    default:
  }

  return state;
}
