export const loading = (type = '') => `${type}_LOADING`;
export const success = (type = '') => `${type}_SUCCESS`;
export const error = (type = '') => `${type}_ERROR`;

export const APP = {
  LOAD: 'APP_LOAD',
  TOGGLE_POPUP: 'APP_TOGGLE_POPUP',
  DO_SIGNUP: 'APP_DO_SIGNUP',
  DO_LOGIN: 'APP_DO_LOGIN',
  DO_UPDATE_USER: 'APP_DO_UPDATE_USER',
  DO_RESEND_VALIDATION_EMAIL: 'APP_DO_RESEND_VALIDATION_EMAIL',
  DO_VALIDATE_ACCOUNT: 'APP_DO_VALIDATE_ACCOUNT',
  DO_VALIDATE_PASSWORD: 'APP_DO_VALIDATE_PASSWORD',
  DO_CREATE_PASSWORD: 'APP_DO_CREATE_PASSWORD',
  DO_UPDATE_PASSWORD: 'APP_DO_UPDATE_PASSWORD',
  DO_FACEBOOK_LOGIN: 'APP_DO_FACEBOOK_LOGIN',
  DO_ADD_FACEBOOK_ACCOUNT: 'APP_DO_ADD_FACEBOOK_ACCOUNT',
  DO_DISCONNECT_FACEBOOK: 'APP_DISCONNECT_FACEBOOK',
  DO_CONFIRM_PASSWORD: 'APP_DO_CONFIRM_PASSWORD',
  DO_RESET_PWD: 'APP_DO_RESET_PWD',
  DO_LOGOUT: 'APP_DO_LOGOUT',
  CLEAR_ERROR: 'APP_CLEAR_ERROR',
};

export const GAMER_DETAILS = {
  LOAD: 'GAMER_DETAILS_LOAD',
  APPLY_REVIEW_FILTERS: 'GAMER_DETAILS_APPLY_REVIEW_FILTERS',
};

export const NOTIFICATIONS = {
  PUSH: 'NOTIFICATIONS_PUSH',
  DELETE: 'NOTIFICATIONS_DELETE',
};
