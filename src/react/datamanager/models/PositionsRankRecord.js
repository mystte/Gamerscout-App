import { Record } from 'typed-immutable';

export const POSITION_TYPE = {
  TOP: 'TOP',
  MID: 'MID',
  JUNGLE: 'JUNGLE',
  BOTTOM: 'BOTTOM',
  SUPPORT: 'SUPPORT',
}

const defaultProps = {
  positionType: String,
  positionName: String,
  kda: Number,
  ratio: String,
  wins: Number,
  losses: Number,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class PositionsRankRecord extends ExtendsWith(Record(defaultProps, 'PositionsRankRecord')) {
  static apiParser(data) {
    const parsedData = {
      positionType: data.positionType,
      positionName: data.positionName,
      kda: data.kda,
      ration: data.ratio,
      wins: data.wins,
      losses: data.losses,
    };

    return new PositionsRankRecord(parsedData);
  }
}
