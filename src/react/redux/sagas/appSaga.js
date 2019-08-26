import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import {
  APP, NOTIFICATIONS, loading, success, error,
} from '../actions/actionTypes';
import Api, { fetchAsync } from '../../datamanager/api/Api';
import AppRecord from '../../datamanager/models/AppRecord';
import UserRecord from '../../datamanager/models/UserRecord';
import { isEmpty } from '../../utils/objects';
import NotificationRecord, { MOCKED_NOTIFICATION, NOTIFICATION_TYPE } from '../../datamanager/models/NotificationRecord';
import Localization from '../../config/localization/Localization';

function* loadAppData({ parameters }) {
  const actionType = APP.LOAD;
  try {
    const appConfigData = yield fetchAsync(Api.loadAppData);
    const authenticatedData = yield fetchAsync(Api.loadAuthenticatedUser);

    yield put({
      type: success(actionType),
      data: AppRecord.apiParser({
        ...appConfigData.data,
        user: !isEmpty(authenticatedData.data) ? {
          ...authenticatedData.data,
          'gamerscout-api-session': parameters.cookies['gamerscout-api-session'],
        } : null,
      }),
    });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doSignup({ parameters }) {
  const actionType = APP.DO_SIGNUP;

  try {
    yield fetchAsync(Api.doSignup, parameters);
    yield put({ type: success(actionType) });
    yield put({ type: loading(APP.DO_LOGIN), parameters });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doResetPassword({ parameters }) {
  const actionType = APP.DO_RESET_PWD;

  try {
    yield fetchAsync(Api.doResetPassword, parameters);
    yield put({ type: success(actionType) });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doCreatePassword({ parameters }) {
  const actionType = APP.DO_CREATE_PASSWORD;
  const labels = Localization.Labels.notifications;

  try {
    yield fetchAsync(Api.createNewPasswordRequest, parameters);
    yield put({ type: success(actionType) });
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.createNotif({
          title: labels.createPasswordRequest.title,
          type: NOTIFICATION_TYPE.SUCCESS,
        }),
      },
    });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doUpdatePassword({ parameters }) {
  const actionType = APP.DO_UPDATE_PASSWORD;

  try {
    yield fetchAsync(Api.doConfirmPassword, { password: parameters.currentPassword });
    yield fetchAsync(Api.doUpdateUser, {
      id: parameters.userId,
      password: parameters.newPassword,
    });
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.getMockedNotif(MOCKED_NOTIFICATION.UPATED_PASSWORD),
      },
    });
    yield put({ type: success(actionType) });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doConfirmPassword({ parameters }) {
  const actionType = APP.DO_CONFIRM_PASSWORD;

  try {
    yield fetchAsync(Api.doConfirmPassword, parameters);
    yield put({ type: success(actionType) });
    if (parameters.onSuccessData) {
      const action = parameters.onSuccessData.onValidAction;
      const actionParams = parameters.onSuccessData.data;
      const successNotif = parameters.onSuccessData.onSuccessNotif;

      yield put({ type: action, parameters: actionParams });
      if (successNotif) {
        yield put({
          type: NOTIFICATIONS.PUSH,
          parameters: {
            record: NotificationRecord.getMockedNotif(successNotif),
          },
        });
      }
    }
    yield put({ type: APP.TOGGLE_POPUP, parameters: {} });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doUpdateUser({ parameters }) {
  const actionType = APP.DO_UPDATE_USER;

  try {
    yield fetchAsync(Api.doUpdateUser, parameters);
    yield put({ type: success(actionType), data: parameters });
  } catch (e) {
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

function* doFacebookLogin({ parameters }) {
  const actionType = APP.DO_LOGIN;

  try {
    const facebookLoginData = yield fetchAsync(Api.doFacebookLogin, parameters);
    yield put({
      type: success(actionType), data: UserRecord.apiParser(facebookLoginData.data),
    });
    yield put({ type: APP.TOGGLE_POPUP, parameters: {} });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doAddFacebookAccount({ parameters }) {
  const actionType = APP.DO_ADD_FACEBOOK_ACCOUNT;
  const labels = Localization.Labels.notifications;

  try {
    const facebookData = yield fetchAsync(Api.doAddFacebookAccount, parameters);
    yield put({ type: success(actionType), data: facebookData.data });
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.createNotif({
          title: labels.facebookAddAccountSuccess.title,
          type: NOTIFICATION_TYPE.SUCCESS,
        }),
      },
    });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doDisconnectFacebook() {
  const actionType = APP.DO_DISCONNECT_FACEBOOK;
  const labels = Localization.Labels.notifications;

  try {
    yield fetchAsync(Api.doDisconnectFacebook);
    yield put({ type: success(actionType) });
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.createNotif({
          title: labels.facebookRemoveAccountSuccess.title,
          type: NOTIFICATION_TYPE.SUCCESS,
        }),
      },
    });
  } catch (e) {
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.createNotif({
          title: Localization.Errors.userUpdate[e.message],
          type: NOTIFICATION_TYPE.ALERT,
        }),
      },
    });
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doLogout() {
  const actionType = APP.DO_LOGOUT;

  try {
    const logoutData = yield fetchAsync(Api.doLogout);
    yield put({
      type: success(actionType), data: logoutData,
    });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doResendValidationEmail() {
  const actionType = APP.DO_RESEND_VALIDATION_EMAIL;

  try {
    yield fetchAsync(Api.doResendValidationEmail);
    yield put({ type: success(actionType) });
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.getMockedNotif(MOCKED_NOTIFICATION.VALIDATION_EMAIL_RESENT),
      },
    });
  } catch (e) {
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doValidateAccount({ parameters }) {
  const actionType = APP.DO_VALIDATE_ACCOUNT;

  try {
    yield fetchAsync(Api.doValidateAccount, parameters);
    yield put({ type: success(actionType) });
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.getMockedNotif(MOCKED_NOTIFICATION.ACCOUNT_VALIDATED),
      },
    });
  } catch (e) {
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.getMockedNotif(MOCKED_NOTIFICATION.WRONG_VALIDATION_TOKEN),
      },
    });
    yield put({ type: error(actionType), error: e.message });
  }
}

function* doValidatePassword({ parameters }) {
  const actionType = APP.DO_VALIDATE_PASSWORD;
  const labels = Localization.Labels.notifications;

  try {
    yield fetchAsync(Api.doValidatePassword, parameters);
    yield put({ type: success(actionType) });
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.createNotif({
          title: labels.createdPasswordValidated.title,
          type: NOTIFICATION_TYPE.SUCCESS,
        }),
      },
    });
  } catch (e) {
    yield put({
      type: NOTIFICATIONS.PUSH,
      parameters: {
        record: NotificationRecord.getMockedNotif(MOCKED_NOTIFICATION.WRONG_VALIDATION_TOKEN),
      },
    });
    yield put({ type: error(actionType), error: e.message });
  }
}

export function* appSaga() {
  yield takeEvery(loading(APP.LOAD), loadAppData);
  yield takeLatest(loading(APP.DO_LOGIN), doLogin);
  yield takeLatest(loading(APP.DO_FACEBOOK_LOGIN), doFacebookLogin);
  yield takeLatest(loading(APP.DO_ADD_FACEBOOK_ACCOUNT), doAddFacebookAccount);
  yield takeLatest(loading(APP.DO_DISCONNECT_FACEBOOK), doDisconnectFacebook);
  yield takeLatest(loading(APP.DO_SIGNUP), doSignup);
  yield takeLatest(loading(APP.DO_LOGOUT), doLogout);
  yield takeLatest(loading(APP.DO_RESET_PWD), doResetPassword);
  yield takeLatest(loading(APP.DO_UPDATE_USER), doUpdateUser);
  yield takeLatest(loading(APP.DO_CONFIRM_PASSWORD), doConfirmPassword);
  yield takeLatest(loading(APP.DO_CREATE_PASSWORD), doCreatePassword);
  yield takeLatest(loading(APP.DO_UPDATE_PASSWORD), doUpdatePassword);
  yield takeLatest(loading(APP.DO_RESEND_VALIDATION_EMAIL), doResendValidationEmail);
  yield takeLatest(loading(APP.DO_VALIDATE_ACCOUNT), doValidateAccount);
  yield takeLatest(loading(APP.DO_VALIDATE_PASSWORD), doValidatePassword);
}

export default appSaga;
