import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  title: String,
  rank: String,
  points: Number,
  wins: Number,
  losses: Number,
  percentage: Number,
  leagueName: Maybe(String),
  selected: false,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class RankedCardTabRecord extends ExtendsWith(Record(defaultProps, 'RankedCardTabRecord')) {
  static apiParser(data, selected = false) {
    const parsedData = {
      title: data.type,
      rank: data.rank,
      leagueName: data.leagueName,
      points: data.points,
      wins: data.wins,
      losses: data.lost,
      percentage: data.winrate,
      selected: selected,
    };

    return new RankedCardTabRecord(parsedData);
  }
}