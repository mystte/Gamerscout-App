import Immutable from 'immutable';

export const initialState = Immutable.fromJS({
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
