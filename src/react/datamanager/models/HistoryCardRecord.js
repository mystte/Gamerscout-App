import { Record, Maybe, List } from 'typed-immutable';
import HistoryPlayerRecord from './HistoryPlayerRecord';

const defaultProps = {
  kda: Number,
  gameDuration: Number,
  gameMode: Maybe(String),
  gameType: Maybe(String),
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
  items: Maybe(List(Number)),
  opponents: Maybe(List(HistoryPlayerRecord)),
  teammates: Maybe(List(HistoryPlayerRecord)),
};

const ExtendsWith = superclass =>
  class extends superclass {
    static get defaultProps() {
      return defaultProps;
    }

    static get ExtendsWith() {
      return ExtendsWith;
    }
  };

export default class HistoryCardRecord extends ExtendsWith(
  Record(defaultProps, 'HistoryCardRecord')
) {
  static apiParser(data) {
    const parsedData = {
      gameType: data.gameType,
      gameMode: data.gameMode,
      kda: data.kda ? +data.kda.toFixed(1) : 0,
      gameDuration: data.gameDuration,
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
      items: data.items || null,
      opponents: data.opponents.map(playerData =>
        HistoryPlayerRecord.apiParser(playerData)
      ),
      teammates: data.teammates.map(playerData =>
        HistoryPlayerRecord.apiParser(playerData)
      ),
    };

    return new HistoryCardRecord(parsedData);
  }
}
