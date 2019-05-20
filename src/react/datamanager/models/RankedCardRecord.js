import { Record, List } from 'typed-immutable';
import RankedCardTabRecord from './RankedCardTabRecord';
import { GAME_CODE } from './AppRecord';
import Localization from '../../config/localization/Localization';

const defaultProps = {
  tabsList: List(RankedCardTabRecord),
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class RankedCardRecord extends ExtendsWith(Record(defaultProps, 'RankedCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      tabsList: data.map((tabData) => {
        return RankedCardTabRecord.apiParser(tabData);
      }),
    };

    return new RankedCardRecord(parsedData);
  }

  getRankedCardTabHeader(platform, gameCode) {
    const labels = Localization.Labels.gamerDetails.rankedCard;
    let result = [];

    if (gameCode === GAME_CODE.LEAGUE_OF_LEGENDS) {
      result = [
        {
          title: 'RANKED_SOLO_5x5',
          name: labels.rankedSolo5v5,
        },
        {
          title: 'RANKED_FLEX_SR',
          name: labels.rankedFlex5v5,
        },
        {
          title: 'RANKED_FLEX_TT',
          name: labels.rankedFlex3v3,
        }
      ]
    }

    return result;
  }
}
