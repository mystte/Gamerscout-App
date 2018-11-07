import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './reducers';

const configureStore = (initialState) => {
  const createReduxStore = compose(
    applyMiddleware(thunk),
    __DEV__ && window.devToolsExtension ? window.devToolsExtension() : f => f,
  )(createStore);

  const store = createReduxStore(rootReducer, initialState);

  // Enable Webpack hot module replacement for reducers
  if (module.hot) {
    const acceptCallback = () => {
      // eslint-disable-next-line global-require
      const nextRootReducer = require('./reducers').default;
      store.replaceReducer(nextRootReducer);
    };

    module.hot.accept('./reducers', acceptCallback);
    module.hot.acceptCallback = acceptCallback;
  }

  return store;
};

const store = configureStore();

export default store;
