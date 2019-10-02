import { Record } from 'typed-immutable';

const defaultProps = {
  cs: Number,
  gameCreation: Number,
  kda: Number,
  teamKda: Number,
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class TrendDataRecord extends ExtendsWith(Record(defaultProps, 'TrendDataRecord')) {
  static apiParser(data) {
    const parsedData = {
      cs: Math.round(data.cs),
      gameCreation: data.gameCreation,
      kda: Math.round(data.kda * 10) / 10,
      teamKda: Math.round(data.teamKDA * 10) / 10,
    };

    return new TrendDataRecord(parsedData);
  }
}
