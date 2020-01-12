import { Record, List } from 'typed-immutable';
import TrendDataRecord from './TrendDataRecord';

export const TRENDS_LINE_TYPE = {
  KDA: 'TRENDS_LINE_KDA',
  TEAM_KDA: 'TRENDS_LINE_TEAM_KDA',
};

export const TRENDS_OPTIONS = {
  KDA: 'TRENDS_OPTION_KDA',
  TEAM_KDA: 'TRENDS_OPTION_TEAM_KDA',
  TEAM_KDA_VS_KDA: 'TRENDS_OPTION_TEAM_KDA_VS_KDA',
};

const defaultProps = {
  data: List(TrendDataRecord),
};

const ExtendsWith = superclass =>
  class extends superclass {
    static get defaultProps() {
      return defaultProps;
    }

    static get ExtendsWith() {
      return ExtendsWith;
    }

    getChartData = filter => {
      const result = [];
      const hasKda =
        filter === TRENDS_OPTIONS.TEAM_KDA_VS_KDA ||
        filter === TRENDS_OPTIONS.KDA;
      const hasTeamKda =
        filter === TRENDS_OPTIONS.TEAM_KDA_VS_KDA ||
        filter === TRENDS_OPTIONS.TEAM_KDA;
      const kdaPoints = [TRENDS_LINE_TYPE.KDA];
      const teamKdaPoints = [TRENDS_LINE_TYPE.TEAM_KDA];
      this.data.forEach((pointData, idx) => {
        if (idx <= 12) {
          if (hasKda) kdaPoints.push(pointData.kda);
          if (hasTeamKda) teamKdaPoints.push(pointData.teamKda);
        }
      });

      if (hasKda) result.push(kdaPoints);
      if (hasTeamKda) result.push(teamKdaPoints);
      return result;
    };
  };

export default class TrendsCardRecord extends ExtendsWith(
  Record(defaultProps, 'TrendsCardRecord')
) {
  static apiParser(apiData) {
    const parsedData = {
      data: apiData
        .filter(dataToFilter => dataToFilter !== null)
        .map(apiTrendData => TrendDataRecord.apiParser(apiTrendData)),
    };

    return new TrendsCardRecord(parsedData);
  }
}
