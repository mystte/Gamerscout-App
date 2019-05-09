import { Record, Maybe } from 'typed-immutable';

const defaultProps = {
  leagueId: String,
  title: String,
  rank: String,
  rankInNumber: Number,
  points: Number,
  wins: Number,
  losses: Number,
  winrate: Number,
  leagueName: Maybe(String),
  leagueImgUrl: Maybe(String),
  tier: String,
};

const ExtendsWith = (superclass) => class extends superclass {

  static get defaultProps() { return defaultProps; }
  static get ExtendsWith() { return ExtendsWith; }
};

export default class RankedCardTabRecord extends ExtendsWith(Record(defaultProps, 'RankedCardTabRecord')) {
  static apiParser(data) {
    const parsedData = {
      title: data.type,
      rank: data.rank,
      rankInNumber: data.rank_in_number,
      leagueName: data.league_name,
      leagueId: data.league_id,
      leagueImgUrl: data.league_img_url,
      points: data.points,
      wins: data.wins,
      losses: data.lost,
      winrate: data.winrate,
      tier: data.tier,
    };

    return new RankedCardTabRecord(parsedData);
  }
}