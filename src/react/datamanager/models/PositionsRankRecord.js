import { Record, Maybe } from 'typed-immutable';
import { computeWinRate, computeKda } from '../../utils/maths';

export const POSITION_TYPE = {
  TOP: 'TOP',
  MID: 'MID',
  JUNGLE: 'JUNGLE',
  BOTTOM: 'BOTTOM',
  SUPPORT: 'SUPPORT',
};

const defaultProps = {
  positionType: String,
  kda: Maybe(Number),
  ratio: Maybe(Number),
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
      wins: data.win,
      losses: data.loss,
      ratio: computeWinRate(data.win, data.loss),
      kda: computeKda(data.kills, data.assists, data.deaths),
    };

    return new PositionsRankRecord(parsedData);
  }
}
