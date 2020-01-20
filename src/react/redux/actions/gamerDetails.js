import { GAMER_DETAILS, loading } from './actionTypes';

export function setGamerDetailsError(error) {
  return {
    type: GAMER_DETAILS.SET_ERROR,
    parameters: {
      error,
    },
  };
}

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
      mutatedReviewRecord,
    },
  };
}

export function doPushReview(parameters) {
  return {
    type: loading(GAMER_DETAILS.DO_PUSH_REVIEW),
    parameters,
  };
}

export default null;
