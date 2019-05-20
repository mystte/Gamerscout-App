import { Record, List, Maybe } from 'typed-immutable';

export const GAME_PLATFORM = {
  RIOT: 'riot',
  STEAM: 'steam',
  ORIGIN: 'origin',
};

export const GAME_CODE = {
  LEAGUE_OF_LEGENDS: 'LOL',
  ROCKET_LEAGUE: 'ROCKET_LEAGUE',
};

const defaultProps = {
  platforms: List(Record({
    name: String,
    enabled: Boolean,
    iconUrl: Maybe(String),
  })),
  regions: Record({
    lol: Object,
  }),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class AppRecord extends ExtendsWith(Record(defaultProps, 'AppRecord')) {
  static apiParser(data) {
    const parsedData = {
      platforms: (data.platforms) ? data.platforms.map((platform) => ({
        name: platform.name,
        enabled: platform.enabled,
        iconUrl: platform['icon-url'],
      })) : [],
      regions: (data.regions) ? data.regions : null,
    };
    return new AppRecord(parsedData);
  }
}
