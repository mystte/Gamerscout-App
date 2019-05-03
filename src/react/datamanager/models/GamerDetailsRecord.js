import { Record, Maybe, List } from 'typed-immutable';

import ApprovalsCardRecord from './ApprovalsCardRecord';
import DisapprovalsCardRecord from './DisapprovalsCardRecord';
import HistoryCardRecord from './HistoryCardRecord';
import ReviewsCardRecord from './ReviewsCardRecord';
import RankedCardRecord from './RankedCardRecord';
import TrendsCardRecord from './TrendsCardRecord';

const defaultProps = {
  RankedCardRecord: Maybe(RankedCardRecord),
  ApprovalsCardRecord: Maybe(ApprovalsCardRecord),
  DisapprovalsCardRecord: Maybe(DisapprovalsCardRecord),
  GameHistoryList: Maybe(List(HistoryCardRecord)),
  ReviewsCardRecord: Maybe(ReviewsCardRecord),
  TrendsCardRecord: Maybe(TrendsCardRecord),
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class GamerDetailsRecord extends ExtendsWith(Record(defaultProps, 'GamerDetailsRecord')) {

}