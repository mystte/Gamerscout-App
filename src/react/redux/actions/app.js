
import { APP, loading } from './actionTypes';

export function loadAppData(cookies) {
  return {
    type: loading(APP.LOAD),
    parameters: {
      cookies,
    },
  };
}

export function togglePopup(type = null) {

  return {
    type: APP.TOGGLE_POPUP,
    parameters: {
      type,
    },
  };
}

export default null;
