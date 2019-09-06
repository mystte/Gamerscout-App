import { Record, List } from 'typed-immutable';

import HistoryCardRecord from './HistoryCardRecord';

const defaultProps = {
  historyCards: List(HistoryCardRecord),
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class HistoryListRecord extends ExtendsWith(Record(defaultProps, 'HistoryListRecord')) {
  static apiParser(data) {
    console.log('historyRecordData = ', data);
    const parsedData = {
      historyCards: data.map((recentGameData) => HistoryCardRecord.apiParser(recentGameData)),
    };

    return new HistoryListRecord(parsedData);
  }
}
