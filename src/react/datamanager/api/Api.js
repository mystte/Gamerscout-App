import axios from 'axios';
import md5 from 'md5';

const CALL_TYPE = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
};

export async function fetchAsync(func, parameters) {
  const response = await func(parameters);

  if (response.status >= 200 && response.status <= 205) {
    return await JSON.parse(JSON.stringify(response));
  } else if (response.status) {
    console.error("Api error : ", response);
    throw new Error(response.data.error);
  } else {
    throw new Error("Unexpected error!!!");
  }
}

async function doApiCall(url, params, callType = CALL_TYPE.GET) {
  const serverUrl = process.env.API_URL;

  let result = null;
  const axiosOptions = {
    validateStatus: (status) => status >= 200 && status <= 500,
    withCredentials: true,
  }

  if (callType === CALL_TYPE.GET) {
    result = await axios.get(`${serverUrl}${url}`, axiosOptions);
  } else if (callType === CALL_TYPE.POST) {
    result = await axios.post(`${serverUrl}${url}`, params, axiosOptions);
  } else if (callType === CALL_TYPE.PUT) {
    result = null;
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
    }

    return doApiCall('/users/signup', data, CALL_TYPE.POST);
  }

  static doLogin({email, password}) {
    const data = {
      email,
      password: md5(password),
    }

    return doApiCall('/users/login', data, CALL_TYPE.POST);
  }

  static doLogout() {
    return doApiCall('/users/logout', null, CALL_TYPE.POST);
  }
}

