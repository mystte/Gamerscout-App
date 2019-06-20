import validator from 'validator';
import ERROR_TYPES from '../../config/localization/errors/errorTypes';


export default class Validator {
  static doLoginValidator(email, password) {

    if (!validator.isEmail(email)) return ERROR_TYPES.ERR_WRONG_EMAIL;
    if (password.length < 6) return ERROR_TYPES.ERR_WRONG_PASSWORD;

    return true;
  }
}
