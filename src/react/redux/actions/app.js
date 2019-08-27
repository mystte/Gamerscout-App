
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

export function doAddFacebookAccount(token) {
  return {
    type: loading(APP.DO_ADD_FACEBOOK_ACCOUNT),
    parameters: {
      token,
    },
  };
}

export function doValidateAccount(token) {
  return {
    type: loading(APP.DO_VALIDATE_ACCOUNT),
    parameters: {
      token,
    },
  };
}

export function doValidatePassword(token) {
  return {
    type: loading(APP.DO_VALIDATE_PASSWORD),
    parameters: {
      token,
    },
  };
}

export function doResendValidationEmail() {
  return {
    type: loading(APP.DO_RESEND_VALIDATION_EMAIL),
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

export function doCreatePassword({
  userId,
  newPassword,
}) {
  return {
    type: loading(APP.DO_CREATE_PASSWORD),
    parameters: {
      userId,
      newPassword,
    },
  };
}

export function doUpdatePassword({
  userId,
  currentPassword,
  newPassword,
}) {
  return {
    type: loading(APP.DO_UPDATE_PASSWORD),
    parameters: {
      userId,
      currentPassword,
      newPassword,
    },
  };
}

export function doUpdateUser({
  id,
  newEmail = null,
  newPassword = null,
  username = null,
}) {
  return {
    type: loading(APP.DO_UPDATE_USER),
    parameters: {
      id,
      email: newEmail,
      password: newPassword,
      username,
    },
  };
}


export function doConfirmPassword(password, onSuccessData = null) {
  return {
    type: loading(APP.DO_CONFIRM_PASSWORD),
    parameters: {
      password,
      onSuccessData,
    },
  };
}

export function doResetPassword(
  email,
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
    type: APP.CLEAR_ERROR,
  };
}

export function togglePopup(type = null, forceDisplay = null, params) {
  return {
    type: APP.TOGGLE_POPUP,
    parameters: {
      type,
      forceDisplay,
      params,
    },
  };
}

export default null;
