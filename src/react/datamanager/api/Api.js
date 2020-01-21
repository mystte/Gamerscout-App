import axios from 'axios';
import md5 from 'md5';

const CALL_TYPE = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
};

export async function fetchAsync(func, parameters) {
  const response = await func(parameters);
  let resultJson = null;

  if (response.status >= 200 && response.status <= 205) {
    resultJson = JSON.parse(JSON.stringify(response));
  } else if (response.status) {
    console.error('Api error : ', response);
    throw new Error(response.data.error);
  } else {
    throw new Error('Unexpected error!!!');
  }

  return resultJson;
}

async function doApiCall(url, params, callType = CALL_TYPE.GET) {
  const apiUrl = process.env.API_URL;
  const apiVersion = process.env.API_VERSION;
  const serverFullUrl = `${apiUrl}/api/${apiVersion}`;

  let result = null;
  const axiosOptions = {
    validateStatus: status => status >= 200 && status <= 500,
    withCredentials: true,
  };

  if (callType === CALL_TYPE.GET) {
    result = await axios.get(`${serverFullUrl}${url}`, axiosOptions);
  } else if (callType === CALL_TYPE.POST) {
    result = await axios.post(`${serverFullUrl}${url}`, params, axiosOptions);
  } else if (callType === CALL_TYPE.PUT) {
    result = await axios.put(`${serverFullUrl}${url}`, params, axiosOptions);
  }
  return result;
}

export default class Api {
  static loadGamerDetails({ game, gamertag, platform, region }) {
    const url = `/search/${platform}/${region}/${game}/${gamertag}`;

    return doApiCall(url);
  }

  static loadAuthenticatedUser() {
    const url = '/users/_/authenticated';

    return doApiCall(url);
  }

  static loadAttributes() {
    const url = '/attributes';

    return doApiCall(url);
  }

  static loadAppData() {
    return doApiCall('/config');
  }

  static doSignup({ username, email, password }) {
    const data = {
      username,
      email,
      password: md5(password),
    };

    return doApiCall('/users/signup', data, CALL_TYPE.POST);
  }

  static doLogin({ email, password }) {
    const data = {
      email,
      password: md5(password),
    };

    return doApiCall('/users/login', data, CALL_TYPE.POST);
  }

  static doPushReview({ review, selectedAttributes, gamerId, isApproval }) {
    const data = {
      id: gamerId,
      comment: review,
      attributes: selectedAttributes,
      review_type: isApproval ? 'REP' : 'FLAME',
    };

    return doApiCall('/gamer/review', data, CALL_TYPE.POST);
  }

  static doGetReviews(gamerId) {
    return doApiCall(`/reviews/${gamerId}`);
  }

  static createNewPasswordRequest({ newPassword }) {
    const data = { password: md5(newPassword) };

    return doApiCall('/users/newPasswordRequest', data, CALL_TYPE.POST);
  }

  static doUpdateUser({ id, email, password, username }) {
    const data = { id };

    if (email) data.email = email;
    if (password) data.password = md5(password);
    if (username) data.username = username;
    return doApiCall(`/users/${id}`, data, CALL_TYPE.PUT);
  }

  static doResetPassword({ email }) {
    const data = {
      email,
    };

    return doApiCall('/users/forgotten_password', data, CALL_TYPE.POST);
  }

  static doConfirmPassword({ password }) {
    const data = {
      password: md5(password),
    };

    return doApiCall('/users/validate_password', data, CALL_TYPE.POST);
  }

  static doFacebookLogin({ token }) {
    const data = {
      access_token: token,
    };

    return doApiCall('/users/facebook_auth', data, CALL_TYPE.POST);
  }

  static doAddFacebookAccount({ token }) {
    const data = {
      token,
    };

    return doApiCall('/users/add_facebook', data, CALL_TYPE.POST);
  }

  static doDisconnectFacebook() {
    return doApiCall('/users/facebook_disconnect', null, CALL_TYPE.POST);
  }

  static doLogout() {
    return doApiCall('/users/logout', null, CALL_TYPE.POST);
  }

  static doResendValidationEmail() {
    return doApiCall('/users/validation/email/resend', null, CALL_TYPE.POST);
  }

  static doGetMostReviewedPlayers() {
    return doApiCall('/getMostReviewed');
  }

  static doGetHighestRatedPlayers() {
    return doApiCall('/getHighestRated');
  }

  static doGetRecentReviewsPlayers() {
    return doApiCall('/getRecentReviews');
  }

  static doValidateAccount(params) {
    return doApiCall('/account/validate', params, CALL_TYPE.POST);
  }

  static doValidatePassword(params) {
    return doApiCall('/users/tokenPasswordValidation', params, CALL_TYPE.POST);
  }
}
