import { Record, List, Maybe } from 'typed-immutable';

import RecentPerformanceDataRecord from './RecentPerformanceDataRecord';
import { computeKda } from '../../utils/maths';
import Localization from '../../config/localization/Localization';

export const RECENT_PERFORMANCE_FILTERS = {
  ALL_POSITIONS: 'RECENT_PERFORMANCES_ALL_POSITIONS',
  ALL_CHAMPIONS: 'RECENT_PERFORMANCES_ALL_CHAMPIONS',
};

const defaultProps = {
  recentPerformanceList: Maybe(List(RecentPerformanceDataRecord)),
};

const ExtendsWith = (superclass) => class extends superclass {
  static get defaultProps() { return defaultProps; }

  static get ExtendsWith() { return ExtendsWith; }

  getFilteredData(positionFilter, championFilter) {
    console.log('positionFilter', positionFilter, 'championFilter', championFilter);
    const labels = Localization.Labels.gamerDetails.recentPerformanceCard;

    let winsCount = 0;
    let lossesCount = 0;
    let cs = 0;
    let kills = 0;
    let deaths = 0;
    let assists = 0;
    const champions = [{
      name: RECENT_PERFORMANCE_FILTERS.ALL_CHAMPIONS,
      label: labels.allChampions,
    }];
    const positions = [{
      name: RECENT_PERFORMANCE_FILTERS.ALL_POSITIONS,
      label: labels.allPositions,
    }];

    console.log('positions = ', positions);

    this.recentPerformanceList.forEach((recentPerfData) => {
      if (championFilter.name === recentPerfData.champion
        || championFilter.name === RECENT_PERFORMANCE_FILTERS.ALL_CHAMPIONS) {
        if (recentPerfData.win) winsCount += 1;
        else lossesCount += 1;
        cs += recentPerfData.cs;
        kills += recentPerfData.kills;
        deaths += recentPerfData.deaths;
        assists += recentPerfData.assists;
      }

      const championExist = champions.find((champ) => (recentPerfData.champion === champ.name))
        !== undefined;
      if (!championExist) {
        champions.push({
          label: recentPerfData.champion,
          name: recentPerfData.champion,
        });
      }
    });

    return {
      winsPercentage: Math.round((winsCount * 100) / (winsCount + lossesCount)),
      lossesPercentage: Math.round((lossesCount * 100) / (winsCount + lossesCount)),
      wins: winsCount,
      losses: lossesCount,
      cs,
      kills,
      deaths,
      assists,
      kda: computeKda(kills, assists, deaths),
      champions: champions.sort((a, b) => a.name - b.name),
    };
  }
};

export default class RecentPerformanceCardRecord extends ExtendsWith(Record(defaultProps, 'RecentPerformanceCardRecord')) {
  static apiParser(data) {
    const parsedData = {
      recentPerformanceList: data.map(
        (matchData) => RecentPerformanceDataRecord.apiParser(matchData),
      ),
    };

    return new RecentPerformanceCardRecord(parsedData);
  }
}
