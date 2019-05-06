import { combineReducers } from 'redux';

import app from './appReducer';
import gamerDetails from './gamerDetailsReducer';

const rootReducer = combineReducers({
  app,
  gamerDetails,
});

export default rootReducer;