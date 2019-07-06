import { combineReducers } from 'redux';

import app from './appReducer';
import gamerDetails from './gamerDetailsReducer';
import notifications from './notificationsReducer'

const rootReducer = combineReducers({
  app,
  gamerDetails,
  notifications,
});

export default rootReducer;
