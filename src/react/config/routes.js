import Localization from './localization/Localization';

const APP_URL_BASE = '/';

const formatUrlForRouter = (url) => {
  return url
    .replace(/{/g, ':')
    .replace(/}/g, '');
};

export const getHomeUrl = () => APP_URL_BASE;

export const getGamerDetailsUrl = (platform, region, game, gamertag) => {
  let gamerDetailsUrl = Localization.Urls.gamerDetailsUrl;

  if (platform && region && game && gamertag) {
    gamerDetailsUrl = Localization.Urls.formatString(gamerDetailsUrl, {
      platform,
      region,
      game,
      gamertag,
    });
  } else {
    gamerDetailsUrl = formatUrlForRouter(gamerDetailsUrl);
  }

  return gamerDetailsUrl;
};