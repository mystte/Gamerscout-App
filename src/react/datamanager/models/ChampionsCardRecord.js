import { Record, Maybe, List } from 'typed-immutable';

import ChampionsRankRecord from './ChampionsRankRecord';
import PositionsRankRecord from './PositionsRankRecord';

const defaultProps = {
  championsStatsList: List(ChampionsRankRecord),
  positionsStatsList: List(PositionsRankRecord),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class ChampionsCardRecord extends ExtendsWith(Record(defaultProps, 'ChampionsCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      championsStatsList: [],
    };

    return new ChampionsCardRecord(parsedData);
  }
}