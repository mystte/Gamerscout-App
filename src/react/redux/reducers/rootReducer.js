import { combineReducers } from 'redux';

import app from './appReducer';
import gamerDetails from './gamerDetailsReducer';
import notifications from './notificationsReducer';
import home from './homeReducer';

const rootReducer = combineReducers({
  app,
  home,
  gamerDetails,
  notifications,
});

export default rootReducer;
