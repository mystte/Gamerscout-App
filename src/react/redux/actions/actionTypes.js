export const loading = (type = '') => `${type}_LOADING`;
export const success = (type = '') => `${type}_SUCCESS`;
export const error = (type = '') => `${type}_ERROR`;

export const APP = {
  LOAD: 'APP_LOAD',
  TOGGLE_POPUP: 'APP_TOGGLE_POPUP',
  DO_LOGIN: 'APP_DO_LOGIN',
  DO_LOGOUT: 'APP_DO_LOGOUT',
};

export const GAMER_DETAILS = {
  LOAD: 'GAMER_DETAILS_LOAD',
  APPLY_REVIEW_FILTERS: 'GAMER_DETAILS_APPLY_REVIEW_FILTERS',
};
