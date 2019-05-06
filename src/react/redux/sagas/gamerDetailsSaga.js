import { put, takeEvery, takeLatest } from 'redux-saga/effects'
import { GAMER_DETAILS, loading, success, error } from '../actions/actionTypes';
import Api, { fetchAsync } from '../../datamanager/api/Api'
import GamerDetailsRecord from '../../datamanager/models/GamerDetailsRecord';

function* loadGamerDetails() {
  const actionType = GAMER_DETAILS.LOAD;
  try {
    const gamerDetailsData = yield fetchAsync(Api.loadGamerDetails);
    yield put({ type: success(actionType), data: GamerDetailsRecord.apiParser(gamerDetailsData) });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}
export function* usersSaga() {
  // Allows concurrent fetches of users
  yield takeEvery(loading(GAMER_DETAILS.LOAD), loadGamerDetails);
  // Does not allow concurrent fetches of users
  // yield takeLatest(loading(GAMER_DETAILS.LOAD), loadGamerDetails);
}
export default usersSaga;