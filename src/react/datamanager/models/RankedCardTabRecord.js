import { Record, Maybe } from 'typed-immutable';
import { romanToNumber } from '../../utils/strings';
import { computeWinRate } from '../../utils/maths';

const defaultProps = {
  leagueId: String,
  title: String,
  rank: String,
  rankInNumber: Number,
  points: Number,
  wins: Number,
  losses: Number,
  winrate: Number,
  leagueImgUrl: Maybe(String),
  tier: String,
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

export default class RankedCardTabRecord extends ExtendsWith(
  Record(defaultProps, 'RankedCardTabRecord')
) {
  static apiParser(data) {
    const rankedLeagueImg = `lol/rankingIcons/${data.tier.toLowerCase()}_${romanToNumber(
      data.rank
    )}`;
    const parsedData = {
      title: data.queueType,
      rank: data.rank,
      rankInNumber: romanToNumber(data.rank),
      leagueId: data.leagueId,
      leagueImgUrl: rankedLeagueImg,
      points: data.leaguePoints,
      wins: data.wins,
      losses: data.losses,
      winrate: computeWinRate(data.wins, data.losses),
      tier: data.tier.toLowerCase(),
    };

    return new RankedCardTabRecord(parsedData);
  }
}
