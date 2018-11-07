import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import defaultActivityState from './activityMock';

const baseState = {
  activity: defaultActivityState,
};

export const mockState = () => ({
  ...baseState,
});

export const createMockStore = (state) => {
  const middlewares = [thunk];
  const store = configureMockStore(middlewares)(state);
  return store;
};
