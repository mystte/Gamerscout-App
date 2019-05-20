import { put, takeEvery } from 'redux-saga/effects'
import { APP, loading, success, error } from '../actions/actionTypes';
import Api, { fetchAsync } from '../../datamanager/api/Api'
import AppRecord from '../../datamanager/models/AppRecord';

function* loadAppData() {
  const actionType = APP.LOAD;
  try {
    const appConfigData = yield fetchAsync(Api.loadAppData);
    yield put({ type: success(actionType), data: AppRecord.apiParser(appConfigData.data) });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

export function* appSaga() {
  yield takeEvery(loading(APP.LOAD), loadAppData);
}

export default appSaga;
