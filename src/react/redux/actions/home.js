import { HOME, loading } from './actionTypes';

export function loadHome() {
  return {
    type: loading(HOME.LOAD),
  };
}

export default null;
