
import { APP, loading } from './actionTypes';

export function loadAppData() {
  return {
    type: loading(APP.LOAD),
  };
}