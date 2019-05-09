import axios from 'axios';

const CALL_TYPE = {
  GET: 'get',
  POST: 'post',
  PUT: 'put',
};

export async function fetchAsync(func, parameters) {
  const response = await func(parameters);

  if (response.status >= 200 && response.status <= 201) {
    return await JSON.parse(JSON.stringify(response));
  } else {
    throw new Error("Unexpected error!!!");
  }
}

async function doApiCall(url, params, callType = CALL_TYPE.GET) {
  const serverUrl = process.env.API_URL;
  let result = null;

  if (callType === CALL_TYPE.GET) {
    result = await axios.get(`${serverUrl}${url}`);
  } else if (callType === CALL_TYPE.POST) {
  } else if (callType === CALL_TYPE.PUT) {
  }
  return result;
}

export default class Api {
  static loadGamerDetails({ game, gamertag, platform, region }) {
    const url = `/search/${game}/${region}/${gamertag}`;

    return doApiCall(url);
  };

  static loadAppData() {
    return doApiCall('/config');
  };
}
