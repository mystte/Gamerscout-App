import { Record, List } from 'typed-immutable';
import TrendDataRecord from './TrendDataRecord';

export const TRENDS_LINE_TYPE = {
  KDA: 'TRENDS_LINE_KDA',
  TEAM_KDA: 'TRENDS_LINE_TEAM_KDA',
};

const defaultProps = {
  data: List(TrendDataRecord),
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }

  getChartData = (kda = true, teamKda = true) => {
    const kdaPoints = [TRENDS_LINE_TYPE.KDA];
    const teamKdaPoints = [TRENDS_LINE_TYPE.TEAM_KDA];
    this.data.forEach((pointData, idx) => {
      if (idx >= 39) {
        if (kda) kdaPoints.push(pointData.kda);
        if (teamKda) teamKdaPoints.push(pointData.teamKda);
      }
    });
    return [
      kda ? kdaPoints : null,
      teamKda ? teamKdaPoints : null,
    ];
  }
};

export default class TrendsCardRecord extends ExtendsWith(Record(defaultProps, 'TrendsCardRecord')) {
  static apiParser(apiData) {
    const parsedData = {
      data: apiData
        .filter((dataToFilter) => dataToFilter !== null)
        .map((apiTrendData) => (TrendDataRecord.apiParser(apiTrendData))),
    };

    return new TrendsCardRecord(parsedData);
  }
}
