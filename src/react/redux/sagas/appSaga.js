import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { APP, loading, success, error } from '../actions/actionTypes';
import Api, { fetchAsync } from '../../datamanager/api/Api'
import AppRecord from '../../datamanager/models/AppRecord';
import UserRecord from '../../datamanager/models/UserRecord';
import { isEmpty } from '../../utils/objects';

function* loadAppData({ parameters }) {
  const actionType = APP.LOAD;
  try {
    const appConfigData = yield fetchAsync(Api.loadAppData);
    const authenticatedData = yield fetchAsync(Api.loadAuthenticatedUser);

    yield put({ type: success(actionType), data: AppRecord.apiParser({
      ...appConfigData.data,
      user: !isEmpty(authenticatedData.data) ? {
        ...authenticatedData.data,
        'gamerscout-api-session': parameters.cookies['gamerscout-api-session'],
      } : null,
    }) });
  } catch(e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doLogin({ parameters }) {
  const actionType = APP.DO_LOGIN;

  try {
    const loginData = yield fetchAsync(Api.doLogin, parameters);
    yield put({
      type: success(actionType), data: UserRecord.apiParser(loginData.data),
    });
    yield put({ type: APP.TOGGLE_POPUP, parameters: {} });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

export function* appSaga() {
  yield takeEvery(loading(APP.LOAD), loadAppData);
  yield takeLatest(loading(APP.DO_LOGIN), doLogin);
}

export default appSaga;
