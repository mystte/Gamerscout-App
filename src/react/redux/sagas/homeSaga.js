import { put, takeEvery } from 'redux-saga/effects';
import {
  loading,
  HOME,
  success,
  error,
} from '../actions/actionTypes';
import Api, { fetchAsync } from '../../datamanager/api/Api';
import HomeRecord from '../../datamanager/models/HomeRecord';

function* loadHome() {
  const actionType = HOME.LOAD;
  try {
    const getMostReviewedData = yield fetchAsync(Api.doGetMostReviewedPlayers);
    const getHighestRatedData = yield fetchAsync(Api.doGetHighestRatedPlayers);
    const getRecentReviewsData = yield fetchAsync(Api.doGetRecentReviewsPlayers);

    yield put({
      type: success(actionType),
      data: HomeRecord.apiParser({
        mostReviewed: getMostReviewedData.data.gamers,
        highestRated: getHighestRatedData.data.gamers,
        recentReviews: getRecentReviewsData.data.gamers,
      }),
    });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* homeSaga() {
  yield takeEvery(loading(HOME.LOAD), loadHome);
}

export default homeSaga;
