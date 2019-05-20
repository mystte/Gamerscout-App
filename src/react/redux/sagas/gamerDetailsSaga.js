import { put, takeEvery } from 'redux-saga/effects'
import { GAMER_DETAILS, loading, success, error } from '../actions/actionTypes';
import Api, { fetchAsync } from '../../datamanager/api/Api'
import GamerDetailsRecord from '../../datamanager/models/GamerDetailsRecord';

function* loadGamerDetails({ parameters }) {
  const actionType = GAMER_DETAILS.LOAD;
  try {
    const gamerDetailsData = yield fetchAsync(Api.loadGamerDetails, parameters);
    yield put({ type: success(actionType), data: GamerDetailsRecord.apiParser(gamerDetailsData.data) });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* gamerDetailsSaga() {
  yield takeEvery(loading(GAMER_DETAILS.LOAD), loadGamerDetails);
}

export default gamerDetailsSaga;
