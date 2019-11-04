import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  championId: Maybe(Number),
  champion: Maybe(String),
  kills: Maybe(Number),
  deaths: Maybe(Number),
  assists: Maybe(Number),
  kda: Maybe(Number),
  lane: Maybe(String),
  win: Maybe(Boolean),
  cs: Number,
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class RecentPerformanceDataRecord extends ExtendsWith(Record(defaultProps, 'RecentPerformanceDataRecord')) {
  static apiParser(data) {
    console.log(data);

    const parsedData = {
      championId: data.championId ? data.championId : null,
      champion: data.champion ? data.champion : null,
      kills: data.kills ? data.kills : null,
      deaths: data.deaths ? data.deaths : null,
      assists: data.assists ? data.assists : null,
      lane: data.lane ? data.lane : null,
      kda: data.kda ? data.kda : null,
      win: data.win ? data.win : null,
      cs: data.totalMinionsKilled ? data.totalMinionsKilled : 0,
    };

    return new RecentPerformanceDataRecord(parsedData);
  }
}
