import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  championName: String,
  kda: Number,
  ratio: Maybe(Number),
  wins: Number,
  losses: Number,
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }

  getWinRatio = () => (
    Math.round(((this.wins * 100) / (this.wins + this.losses)))
  )
};

export default class ChampionsRankRecord extends ExtendsWith(Record(defaultProps, 'ChampionsRankRecord')) {
  static apiParser(data) {
    const parsedData = {
      championName: data.champion,
      kda: Math.round(data.kda * 10) / 10,
      ratio: data.ratio,
      wins: data.wins,
      losses: data.losses,
    };

    return new ChampionsRankRecord(parsedData);
  }
}
