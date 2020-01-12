import { Record, Maybe } from 'typed-immutable';
import { List } from 'immutable';

const defaultProps = {
  mostReviewedPlayers: Maybe(List),
  highestRatedPlayers: Maybe(List),
  recentReviewedPlayers: Maybe(List),
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

export default class HomeRecord extends ExtendsWith(
  Record(defaultProps, 'HomeRecord')
) {
  static apiParser(data) {
    const parsedData = {
      mostReviewedPlayers: data.mostReviewed || [],
      highestRatedPlayers: data.highestRated || [],
      recentReviewedPlayers: data.recentReviews || [],
    };
    return new HomeRecord(parsedData);
  }
}
