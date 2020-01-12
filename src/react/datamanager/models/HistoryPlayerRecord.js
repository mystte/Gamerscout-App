import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  champion: Maybe(String),
  championId: Number,
  participantId: Number,
  summonerId: String,
  teamId: Number,
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

export default class HistoryPlayerRecord extends ExtendsWith(
  Record(defaultProps, 'HistoryPlayerRecord')
) {
  static apiParser(data) {
    const parsedData = {
      champion: data.champion || null,
      championId: data.championId,
      participantId: data.participantId,
      summonerId: data.summonerId,
      teamId: data.teamId,
    };

    return new HistoryPlayerRecord(parsedData);
  }
}
