
import { GAMER_DETAILS, loading } from './actionTypes';

export function loadGamerDetails(platform, region, game, gamertag) {
  return {
    type: loading(GAMER_DETAILS.LOAD),
    parameters: {
      platform,
      region,
      game,
      gamertag,
    },
  };
}

export function applyReviewFilters(mutatedReviewRecord) {
  return {
    type: GAMER_DETAILS.APPLY_REVIEW_FILTERS,
    parameters: {
      mutatedReviewRecord
    },
  };
}

export default null;
