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
  ROCKET_LEAGUE: 'rocket_league',
};

const defaultProps = {
  platforms: List(Record({
    name: String,
    enabled: Boolean,
    iconUrl: Maybe(String),
  })),
  regions: Record({
    riot: Object,
  }),
  isAuthenticated: Boolean,
  showPopup: Boolean,
  popupData: Maybe(PopupRecord),
  user: Maybe(UserRecord),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class AppRecord extends ExtendsWith(Record(defaultProps, 'AppRecord')) {
  static parseRegionsData(regionsData) {
    const parsedData = {
      riot: (regionsData.riot) ? ConfigRegionRecord.apiParser({ ...regionsData.riot, platform: GAME_PLATFORM.RIOT}) : null,
    };

    return parsedData;
  }

  static apiParser(data) {
    const parsedData = {
      platforms: (data.platforms) ? data.platforms.map((platform) => ({
        name: platform.name,
        enabled: platform.enabled,
        iconUrl: platform['icon-url'],
      })) : [],
      regions: AppRecord.parseRegionsData(data.regions),
      isAuthenticated: data.user ? true : false,
      showPopup: true,
      popupData: PopupRecord.apiParser(data.popupData ? data.popupData : {}),
      user: data.user ? UserRecord.apiParser(data.user) : null,
    };
    return new AppRecord(parsedData);
  }
}
