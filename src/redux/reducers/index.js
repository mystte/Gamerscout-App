import { combineReducers } from 'redux';

import app from './appReducer';

export const appReducers = {
  app,
};

export default combineReducers(appReducers);
