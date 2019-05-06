import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/rootReducer';
import gamerDetailsSaga from './sagas/gamerDetailsSaga';
import appSaga from './sagas/appSaga'

const sagaMiddleware = createSagaMiddleware();

export function configureStore(initialState) {
  const middleware = [sagaMiddleware];
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const store = createStore(rootReducer, initialState, composeEnhancers(applyMiddleware(...middleware)));
  
  sagaMiddleware.run(appSaga);
  sagaMiddleware.run(gamerDetailsSaga);
  
  return store;
}

const store = configureStore();
export default store;