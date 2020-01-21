import { put, takeEvery } from 'redux-saga/effects';
import {
  GAMER_DETAILS,
  loading,
  success,
  error,
  NOTIFICATIONS,
} from '../actions/actionTypes';
import Api, { fetchAsync } from '../../datamanager/api/Api';
import GamerDetailsRecord from '../../datamanager/models/GamerDetailsRecord';
import NotificationRecord, {
  MOCKED_NOTIFICATION,
} from '../../datamanager/models/NotificationRecord';

function* loadGamerDetails({ parameters }) {
  const actionType = GAMER_DETAILS.LOAD;
  try {
    const gamerDetailsData = yield fetchAsync(Api.loadGamerDetails, parameters);
    const attributesData = yield fetchAsync(Api.loadAttributes);

    yield put({
      type: success(actionType),
      data: GamerDetailsRecord.apiParser({
        ...gamerDetailsData.data[0],
        allAttributes: attributesData.data.attributes,
      }),
    });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doPushReview({ parameters }) {
  const actionType = GAMER_DETAILS.DO_PUSH_REVIEW;
  try {
    yield fetchAsync(Api.doPushReview, parameters);
    const reviews = yield fetchAsync(Api.doGetReviews, parameters.gamerId);

    yield put({
      type: success(actionType),
      parameters: {
        ...parameters,
        reviews: reviews.data.reviews,
      },
    });
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.getMockedNotif(
          MOCKED_NOTIFICATION.REVIEW_SUBMITTED
        ),
      },
    });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* gamerDetailsSaga() {
  yield takeEvery(loading(GAMER_DETAILS.LOAD), loadGamerDetails);
  yield takeEvery(loading(GAMER_DETAILS.DO_PUSH_REVIEW), doPushReview);
}

export default gamerDetailsSaga;
