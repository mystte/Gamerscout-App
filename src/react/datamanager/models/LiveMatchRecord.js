import { Record, Maybe } from 'typed-immutable';
import { List } from 'immutable';

const defaultProps = {
  blueTeam: Maybe(List),
  redTeam: Maybe(List),
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

export default class LiveMatchRecord extends ExtendsWith(
  Record(defaultProps, 'LivaMatchRecord')
) {
  static apiParser(data) {
    console.log('DATTAAAAA = ', data);
    const parsedData = {
      blueTeam: data.blue || [],
      redTeam: data.red || [],
    };
    return new LiveMatchRecord(parsedData);
  }
}
