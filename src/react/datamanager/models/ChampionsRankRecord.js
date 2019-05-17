import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  championId: String,
  championName: String,
  kda: Number,
  ratio: String,
  wins: Number,
  losses: Number,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class ChampionsRankRecord extends ExtendsWith(Record(defaultProps, 'ChampionsRankRecord')) {
  static apiParser(data) {
    const parsedData = {
      championsId: data.championId,
      championName: data.championName,
      kda: data.kda,
      ration: data.ratio,
      wins: data.wins,
      losses: data.losses,
    };

    return new ChampionsRankRecord(parsedData);
  }
}