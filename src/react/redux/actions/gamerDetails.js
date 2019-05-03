
import { GAMER_DETAILS, loading } from './actionTypes';


export function loadGamerDetails() {
  return {
    type: loading(GAMER_DETAILS.LOAD),
  };
}