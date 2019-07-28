import validator from 'validator';
import ERROR_TYPES from '../../config/localization/errors/errorTypes';


export default class Validator {
  static doLoginValidator(email, password) {

    if (!validator.isEmail(email)) return ERROR_TYPES.ERR_WRONG_EMAIL;
    if (password.length < 6) return ERROR_TYPES.ERR_WRONG_PASSWORD;

    return true;
  }

  static doSignupValidator(username, email, password) {

    if (!username) return ERROR_TYPES.ERR_USERNAME_REQUIRED;
    if (!email) return ERROR_TYPES.ERR_EMAIL_REQUIRED;
    if (!password) return ERROR_TYPES.ERR_PASSWORD_REQUIRED;
    if (username.length < 4) return ERROR_TYPES.ERR_SHORT_USERNAME;
    if (!validator.isEmail(email)) return ERROR_TYPES.ERR_WRONG_EMAIL;
    if (password.length < 6) return ERROR_TYPES.ERR_WRONG_PASSWORD;

    return true;
  }

  static doResetPasswordValidator(email) {

    if (!email) return ERROR_TYPES.ERR_EMAIL_REQUIRED;
    if (!validator.isEmail(email)) return ERROR_TYPES.ERR_WRONG_EMAIL;

    return true;
  }

  static doEmailValidator(email) {
    if (!validator.isEmail(email)) return ERROR_TYPES.ERR_WRONG_EMAIL;

    return true
  }

  static doNewPasswordValidator(password, passwordConfirm) {
    if (!password || !passwordConfirm) return ERROR_TYPES.ERR_PASSWORD_REQUIRED;
    if (password !== passwordConfirm) return ERROR_TYPES.ERR_WRONG_PASSWORD;
    if (password.length < 6) return ERROR_TYPES.ERR_SHORT_PASSWORD;

    return true
  }

  static doUpdateEmailDisabledValidator(newEmail, email) {
    if (newEmail === null || newEmail === email || newEmail === "") return true;
    return false;
  }

  static doUpdatePasswordDisabledValidator(currentPassword, password, passwordConfirm) {
    if (
      password !== passwordConfirm ||
      password === null ||
      password === "" ||
      password.length < 6 ||
      currentPassword.length < 6
    ) return true;
    return false;
  }
}
