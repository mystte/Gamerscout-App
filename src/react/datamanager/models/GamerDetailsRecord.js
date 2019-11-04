/* eslint-disable no-restricted-globals */
import { Record, Maybe, List } from 'typed-immutable';

import ApprovalsCardRecord from './ApprovalsCardRecord';
import DisapprovalsCardRecord from './DisapprovalsCardRecord';
import ReviewsCardRecord from './ReviewsCardRecord';
import ChampionsCardRecord from './ChampionsCardRecord';
import RankedCardRecord from './RankedCardRecord';
import TrendsCardRecord from './TrendsCardRecord';
import AttributeRecord from './AttributeRecord';
import HistoryListRecord from './HistoryListRecord';
import RecentPerformanceCardRecord from './RecentPerformanceCardRecord';

const defaultProps = {
  accountId: String,
  platform: String,
  game: String,
  gameCode: String,
  gamerId: String,
  gamertag: String,
  gamerIconUrl: String,
  region: String,
  level: Number,
  rankedCardRecord: Maybe(RankedCardRecord),
  approvalsCardRecord: Maybe(ApprovalsCardRecord),
  championsCardRecord: Maybe(ChampionsCardRecord),
  disapprovalsCardRecord: Maybe(DisapprovalsCardRecord),
  recentPerformanceCardRecord: Maybe(RecentPerformanceCardRecord),
  gameHistoryList: Maybe(HistoryListRecord),
  reviewsCardRecord: Maybe(ReviewsCardRecord),
  trendsCardRecord: Maybe(TrendsCardRecord),
  attributesList: Maybe(List(AttributeRecord)),
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }
};

export default class GamerDetailsRecord extends ExtendsWith(Record(defaultProps, 'GamerDetailsRecord')) {
  static parseAttributesData(apiData) {
    if (!apiData.attributes) return apiData.allAttributes;

    return apiData.allAttributes.map((attribute) => (
      {
        ratio: 0,
        frequency: 0,
        ...apiData.attributes.filter((userAttr) => attribute.name === userAttr.name)[0],
        ...attribute,
      }
    )).sort((a, b) => {
      if (a.ratio < b.ratio) return 1;
      if (a.ratio > b.ratio) return -1;
      return 0;
    }).map((attr) => AttributeRecord.apiParser(attr));
  }

  static apiParser(data) {
    const apiData = data;
    const parsedData = {
      accountId: apiData.account_id,
      game: apiData.game,
      gameCode: apiData.game_code,
      platform: apiData.platform,
      gamerId: apiData.gamer_id,
      gamertag: apiData.gamertag,
      gamerIconUrl: apiData.profile_picture,
      level: apiData.level,
      region: apiData.region,
      rankedCardRecord: apiData.stats.ranked
        ? RankedCardRecord.apiParser(apiData.stats.ranked)
        : null,
      approvalsCardRecord: !isNaN(apiData.rep_review_count)
        ? ApprovalsCardRecord.apiParser(apiData)
        : null,
      disapprovalsCardRecord: !isNaN(apiData.flame_review_count)
        ? DisapprovalsCardRecord.apiParser(apiData)
        : null,
      gameHistoryList: HistoryListRecord.apiParser(apiData.stats.recent),
      recentPerformanceCardRecord: RecentPerformanceCardRecord.apiParser(apiData.stats.recent),
      trendsCardRecord: TrendsCardRecord.apiParser(apiData.stats.trends),
      championsCardRecord: ChampionsCardRecord.apiParser(apiData.stats),
      reviewsCardRecord: apiData.reviews ? ReviewsCardRecord.apiParser(apiData) : null,
      attributesList: GamerDetailsRecord.parseAttributesData(apiData),
    };
    return new GamerDetailsRecord(parsedData);
  }
}
