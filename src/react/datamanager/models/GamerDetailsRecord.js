import { Record, Maybe, List } from 'typed-immutable';

import ApprovalsCardRecord from './ApprovalsCardRecord';
import DisapprovalsCardRecord from './DisapprovalsCardRecord';
import HistoryCardRecord from './HistoryCardRecord';
import ReviewsCardRecord from './ReviewsCardRecord';
import RankedCardRecord from './RankedCardRecord';
import TrendsCardRecord from './TrendsCardRecord';

const defaultProps = {
  accountId: String,
  game: String,
  gamerId: String,
  gamertag: String,
  gamerIconUrl: String,
  region: String,
  level: Number,
  rankedCardRecord: Maybe(RankedCardRecord),
  approvalsCardRecord: Maybe(ApprovalsCardRecord),
  disapprovalsCardRecord: Maybe(DisapprovalsCardRecord),
  gameHistoryList: Maybe(List(HistoryCardRecord)),
  reviewsCardRecord: Maybe(ReviewsCardRecord),
  trendsCardRecord: Maybe(TrendsCardRecord),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class GamerDetailsRecord extends ExtendsWith(Record(defaultProps, 'GamerDetailsRecord')) {
  static apiParser(data) {
    const apiData = data[0];
    const parsedData = {
      accountId: apiData.account_id,
      game: apiData.game,
      gamerId: apiData.gamer_id,
      gamertag: apiData.gamertag,
      gamerIconUrl: apiData.profile_picture,
      level: apiData.level,
      region: apiData.region,
      rankedCardRecord: apiData.stats.ranked ? RankedCardRecord.apiParser(apiData.stats.ranked) : null,
    };
    return new GamerDetailsRecord(parsedData);
  }
}