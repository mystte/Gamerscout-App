import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';

import defaultAppState from './appMock';

const baseState = {
  app: defaultAppState,
};

export const mockState = () => ({
  ...baseState,
});

export const createMockStore = (state) => {
  const middlewares = [thunk];
  const store = configureMockStore(middlewares)(state);
  return store;
};
