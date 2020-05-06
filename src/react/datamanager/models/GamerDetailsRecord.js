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
import { REVIEW_TYPE } from './ReviewRecord';
import LiveMatchRecord from './LiveMatchRecord';

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
  liveMatchRecord: Maybe(LiveMatchRecord),
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

const ExtendsWith = superclass =>
  class extends superclass {
    static get defaultProps() {
      return defaultProps;
    }

    static get ExtendsWith() {
      return ExtendsWith;
    }

    updateAttributesList(selectedAttributes) {
      return this.withMutations(mutate => {
        //   selectedAttributes.map(attr => {
        //     const index = this.attributesList.findIndex(
        //       e => e.name === attr.name
        //     );
        //     const currentAttr = this.setIn(
        //       ['attributesList', index],
        //       this.getIn(['attributesList', index]).updateStats(4, 70)
        //     );
        //     if (index) {
        //       console.log('index = ', index, currentAttr);
        //       mutate.set('attributesList', currentAttr);
        //     }
        //   });
      });
    }

    addReview(parameters) {
      const {
        isApproval,
        isDisapproval,
        review,
        selectedAttributes,
        username,
      } = parameters;
      console.log('addReview parameters', parameters);
      let reviewType = REVIEW_TYPE.APPROVAL;
      return this.withMutations(mutate => {
        if (isApproval)
          mutate.set(
            'approvalsCardRecord',
            this.approvalsCardRecord.increment()
          );
        if (isDisapproval) {
          mutate.set(
            'disapprovalsCardRecord',
            this.disapprovalsCardRecord.increment()
          );
          reviewType = REVIEW_TYPE.DISAPPROVAL;
        }
        if (review && selectedAttributes && username && reviewType) {
          mutate.set(
            'reviewsCardRecord',
            this.reviewsCardRecord.addReview({
              comment: review,
              reviewerName: username,
              attributes: selectedAttributes,
              date: Date.now(),
              type: reviewType,
            })
          );
        }
        if (selectedAttributes) {
          // mutate.set(
          //   'attributesList',
          //   this.updateAttributesList(selectedAttributes)
          // );
        }
      });
    }
  };

export default class GamerDetailsRecord extends ExtendsWith(
  Record(defaultProps, 'GamerDetailsRecord')
) {
  static parseAttributesData(apiData) {
    if (!apiData.attributes) return apiData.allAttributes;

    return apiData.allAttributes
      .map(attribute => ({
        ratio: 0,
        frequency: 0,
        ...apiData.attributes.filter(
          userAttr => attribute.name === userAttr.name
        )[0],
        ...attribute,
      }))
      .sort((a, b) => {
        if (a.name > b.name) return 1;
        if (a.name < b.name) return -1;
        return 0;
      })
      .map(attr => AttributeRecord.apiParser(attr));
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
      liveMatchRecord: apiData.stats.live
        ? LiveMatchRecord.apiParser(apiData.stats.live)
        : null,
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
      recentPerformanceCardRecord: RecentPerformanceCardRecord.apiParser(
        apiData.stats.recent
      ),
      trendsCardRecord: TrendsCardRecord.apiParser(apiData.stats.trends),
      championsCardRecord: ChampionsCardRecord.apiParser(apiData.stats),
      reviewsCardRecord: apiData.reviews
        ? ReviewsCardRecord.apiParser(apiData)
        : null,
      attributesList: GamerDetailsRecord.parseAttributesData(apiData),
    };
    return new GamerDetailsRecord(parsedData);
  }
}
