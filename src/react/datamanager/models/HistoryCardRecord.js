import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  gameType: String,
  kda: Number,
  gameDuration: Number,
  startDate: Number,
  win: Boolean,
  cs: Number,
  kills: Number,
  deaths: Number,
  assists: Number,
  championLevel: Maybe(Number),
  champion: Maybe(String),
  championId: Maybe(Number),
  lane: Maybe(String),
  spell1Id: Maybe(Number),
  spell2Id: Maybe(Number),
  teamId: Maybe(Number),
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class HistoryCardRecord extends ExtendsWith(Record(defaultProps, 'HistoryCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      gameType: 'nesaispas',
      kda: +data.kda.toFixed(1) || 0,
      gameDuration: 0,
      startDate: data.gameCreation,
      win: data.win,
      cs: data.totalMinionsKilled,
      kills: data.kills,
      deaths: data.deaths,
      assists: data.assists,
      championLevel: data.championLevel || null,
      champion: data.champion || null,
      championId: data.championId || null,
      lane: data.lane || null,
      spell1Id: data.spell1Id || null,
      spell2Id: data.spell2Id || null,
      teamId: data.teamId || null,
    };

    return new HistoryCardRecord(parsedData);
  }
}
