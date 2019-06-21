
import { APP, loading } from './actionTypes';

export function loadAppData(cookies) {
  return {
    type: loading(APP.LOAD),
    parameters: {
      cookies,
    },
  };
}

export function doLogin(
  email,
  password,
) {
  return {
    type: loading(APP.DO_LOGIN),
    parameters: {
      email,
      password,
    },
  };
}

export function doLogout() {
  return {
    type: loading(APP.DO_LOGOUT),
  };
}

export function togglePopup(type = null, forceDisplay = null) {
  return {
    type: APP.TOGGLE_POPUP,
    parameters: {
      type,
      forceDisplay,
    },
  };
}

export default null;
