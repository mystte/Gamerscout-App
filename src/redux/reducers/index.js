import { combineReducers } from 'redux';

import activity from './activityReducer';

export const activityReducers = {
  activity,
};

export default combineReducers(activityReducers);
