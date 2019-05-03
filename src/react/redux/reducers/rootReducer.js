import { combineReducers } from 'redux';

import gamerDetails from './gamerDetailsReducer';

const rootReducer = combineReducers({
  gamerDetails,
});

export default rootReducer;