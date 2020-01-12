import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import { getLolChampionImgUrl } from '../../../../../../../../../../utils/lol';
import Localization from '../../../../../../../../../../config/localization/Localization';

const ChampionStats = ({ championsStatsList, staticDataUrl }) => {
  const labels = Localization.Labels.gamerDetails.championsCard;

  const renderChampionsList = () =>
    championsStatsList.map((champion, idx) => {
      const rowStyle =
        idx < championsStatsList.size - 1
          ? {
              ...styles.championRow,
              ...styles.bottomSeparator,
            }
          : styles.championRow;

      return (
        <div style={rowStyle} key={`champion${champion.championName}`}>
          <img
            style={styles.championImg}
            alt={`champion ${champion.championName} icon`}
            src={getLolChampionImgUrl(staticDataUrl, champion.championName)}
          ></img>
          <span style={styles.championName}>{champion.championName}</span>
          <span style={styles.kdaContainer}>
            <span style={styles.kda}>{champion.kda}</span>
            <span style={styles.kdaLbl}>{labels.kda}</span>
          </span>
          <span style={styles.percentage}>{champion.getWinRatio()}%</span>
          <div style={styles.winLossesContainer}>
            {champion.wins}
            {labels.wins} / {champion.losses}
            {labels.losses}
          </div>
        </div>
      );
    });

  return <div style={styles.container}>{renderChampionsList()}</div>;
};

ChampionStats.propTypes = {
  championsStatsList: PropTypes.object,
  staticDataUrl: PropTypes.string,
};

ChampionStats.defaultProps = {
  championsStatsList: null,
  staticDataUrl: null,
};

export default ChampionStats;
