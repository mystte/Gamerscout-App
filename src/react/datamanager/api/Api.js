import axios from 'axios';

const CALL_TYPE = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
};

export async function fetchAsync(func) {
  const response = await func();

  if (response.status >= 200 && response.status <= 201) {
    return await JSON.parse(JSON.stringify(response));
  } else {
    throw new Error("Unexpected error!!!");
  }
}

async function doApiCall(url, params, callType = CALL_TYPE.GET) {
  const serverUrl = 'http://localhost:8002/api/1';
  let result = null;

  if (callType === CALL_TYPE.GET) {
    result = await axios.get(`${serverUrl}${url}`);
  } else if (callType === CALL_TYPE.POST) {
  } else if (callType === CALL_TYPE.PUT) {
  }
  return result;
}

export default class Api {
  static loadGamerDetails() {
    return doApiCall('/search/lol/na1/sevenaster');
  };

  static loadAppData() {
    return doApiCall('/config');
  };
}
