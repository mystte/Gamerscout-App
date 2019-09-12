import { Record, List } from 'typed-immutable';

import ChampionsRankRecord from './ChampionsRankRecord';
import PositionsRankRecord from './PositionsRankRecord';
import Localization from '../../config/localization/Localization';

const defaultProps = {
  championsStatsList: List(ChampionsRankRecord),
  positionsStatsList: List(PositionsRankRecord),
};

export const CHAMPIONS_CARD_TAB = {
  CHAMPIONS: 'CHAMPIONS_CARD_TAB',
  POSITIONS: 'POSITIONS_CARD_TAB',
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }

  getChampionsCardTabHeader = () => {
    const labels = Localization.Labels.gamerDetails.championsCard;
    const result = [
      {
        title: CHAMPIONS_CARD_TAB.CHAMPIONS,
        name: labels.champions,
      },
      {
        title: CHAMPIONS_CARD_TAB.POSITIONS,
        name: labels.positions,
      },
    ];

    return result;
  }
};

export default class ChampionsCardRecord extends ExtendsWith(Record(defaultProps, 'ChampionsCardRecord')) {
  static apiParser(apiData) {
    const parsedData = {
      championsStatsList: apiData.frequent_champions.map((championData) => (
        ChampionsRankRecord.apiParser(championData)
      )),
    };

    return new ChampionsCardRecord(parsedData);
  }
}
