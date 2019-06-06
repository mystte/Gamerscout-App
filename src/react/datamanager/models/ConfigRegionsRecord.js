import { Record, List } from 'typed-immutable';

const defaultProps = {
  platform: String,
  regionsCode: List(Record({
    name: String,
    gameCode: String,
  })),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class ConfigRegionRecord extends ExtendsWith(Record(defaultProps, 'ConfigRegionRecord')) {
  static parseRegions(data) {
    const regionsList = data.regions_short ? data.regions_short.map((regionName) => {
      return {
        name: regionName,
        gameCode: data.regions[regionName],
      };
    }) : [];
    return regionsList;
  }

  static apiParser(data) {
    const parsedData = {
      platform: data.platform,
      regionsCode: ConfigRegionRecord.parseRegions(data),
    };
    return new ConfigRegionRecord(parsedData);
  }
}
