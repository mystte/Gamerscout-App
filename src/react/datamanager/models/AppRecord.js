import { Record, List, Maybe } from 'typed-immutable';

import ConfigRegionRecord from './ConfigRegionsRecord';
import UserRecord from './UserRecord';
import PopupRecord from './PopupRecord';

export const GAME_REGIONS = {
  NA: 'na',
  BR: 'br',
  EUE: 'eue',
  EUW: 'euw',
  KR: 'kr',
  LAN: 'lan',
  LAS: 'las',
  OCE: 'oce',
  RU: 'ru',
  TR: 'tr',
};

export const GAME_PLATFORM = {
  RIOT: 'riot',
  STEAM: 'steam',
  ORIGIN: 'origin',
};

export const GAME_CODE = {
  LEAGUE_OF_LEGENDS: 'lol',
  ROCKET_LEAGUE: 'rocketLeague',
};

const defaultProps = {
  platforms: List(
    Record({
      name: String,
      enabled: Boolean,
      iconUrl: Maybe(String),
      staticPath: Maybe(String),
    })
  ),
  regions: Record({
    riot: Object,
  }),
  facebookAppId: Maybe(String),
  isAuthenticated: Boolean,
  showPopup: Boolean,
  popupData: Maybe(PopupRecord),
  user: Maybe(UserRecord),
};

const ExtendsWith = superclass =>
  class extends superclass {
    static get defaultProps() {
      return defaultProps;
    }

    static get ExtendsWith() {
      return ExtendsWith;
    }

    updateApp = data =>
      new AppRecord(
        this.withMutations(mutate => {
          if (typeof data.isAuthenticated !== 'undefined')
            mutate.set('isAuthenticated', data.isAuthenticated);
          if (typeof data.user !== 'undefined') mutate.set('user', data.user);
        })
      );

    getStaticDataUrlForPlatform = platformName => {
      const result = this.platforms.filter(
        platform => platform.name === platformName
      );
      if (result.size > 0)
        return `${process.env.API_URL}${result.getIn([0, 'staticPath'])}`;
      return null;
    };
  };

export default class AppRecord extends ExtendsWith(
  Record(defaultProps, 'AppRecord')
) {
  static parseRegionsData(regionsData) {
    const parsedData = {
      riot: regionsData.riot
        ? ConfigRegionRecord.apiParser({
            ...regionsData.riot,
            platform: GAME_PLATFORM.RIOT,
          })
        : null,
    };

    return parsedData;
  }

  static apiParser(data) {
    const parsedData = {
      platforms: data.platforms
        ? data.platforms.map(platform => ({
            name: platform.name,
            enabled: platform.enabled,
            iconUrl: platform['icon-url'],
            staticPath: platform.staticPath || null,
          }))
        : [],
      regions: AppRecord.parseRegionsData(data.regions),
      isAuthenticated: data.user !== null,
      showPopup: false,
      popupData: PopupRecord.apiParser(data.popupData ? data.popupData : {}),
      user: data.user ? UserRecord.apiParser(data.user) : null,
      facebookAppId: data.facebookAppId ? data.facebookAppId : null,
    };
    return new AppRecord(parsedData);
  }
}
