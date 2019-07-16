
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

export function doFacebookLogin(token) {
  return {
    type: loading(APP.DO_FACEBOOK_LOGIN),
    parameters: {
      token,
    },
  };
}

export function doDisconnectFacebook() {
  return {
    type: loading(APP.DO_DISCONNECT_FACEBOOK),
    parameters: null,
  };
}

export function doSignup(
  username,
  email,
  password,
) {
  return {
    type: loading(APP.DO_SIGNUP),
    parameters: {
      username,
      email,
      password,
    },
  };
}

export function doUpdateUser({
  id,
  newEmail = null,
  newPassword = null,
}) {
  return {
    type: loading(APP.DO_UPDATE_USER),
    parameters: {
      id,
      email: newEmail,
      password: newPassword,
    },
  }
}

export function doResetPassword(
  email
) {
  return {
    type: loading(APP.DO_RESET_PWD),
    parameters: {
      email,
    },
  };
}

export function doLogout() {
  return {
    type: loading(APP.DO_LOGOUT),
  };
}

export function clearAppError() {
  return {
    type: APP.CLEAR_ERROR
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
