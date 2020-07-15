import React from 'react';
import { PropTypes } from 'prop-types';
import find from 'lodash/find';

import Localization from '../../../../../../../config/localization/Localization';
import styles from './styles';
import {
  getLolChampionImgUrl,
  getLolSpellImgUrl,
} from '../../../../../../../utils/lol';
import UseMediaQueries from '../../../../../../views/hooks/UseMediaQueries';

const LiveTeamContainer = ({ staticDataUrl, title, data, staticChampions }) => {
  const { getResponsiveStyle } = UseMediaQueries();
  const labels = Localization.Labels.gamerDetails.liveMatchCard;
  const getChampionByKey = id => {
    return find(staticChampions, e => e.key === `${id}`);
  };

  const renderPlayerRow = (player, last) => {
    const championData = getChampionByKey(player.championId);
    return (
      <div
        key={`${player.summonerName}-${player.teamId}`}
        style={
          last
            ? { ...styles.rowContainer, borderBottom: 'none' }
            : styles.rowContainer
        }
      >
        {championData && (
          <img
            alt={`champion icon`}
            src={getLolChampionImgUrl(staticDataUrl, championData.id)}
            style={styles.avatar}
          ></img>
        )}
        <div className="ellipsis" style={styles.championName}>
          {player.summonerName}
        </div>
        <div style={styles.perksContainer}>
          <img
            alt={`champion icon`}
            src={getLolSpellImgUrl(staticDataUrl, player.spell1Id)}
            style={styles.perks}
          ></img>
          <img
            alt={`champion icon`}
            src={getLolSpellImgUrl(staticDataUrl, player.spell2Id)}
            style={styles.perks}
          ></img>
          <div style={styles.positionDesc}>BOTTOM</div>
        </div>
      </div>
    );
  };

  const renderedRows = data.map((player, idx) => {
    return renderPlayerRow(player, idx === data.size - 1);
  });

  return (
    <div style={styles[getResponsiveStyle('container')]}>
      <div style={styles.header}>
        <div style={styles.title}>{title}</div>
      </div>
      <div style={styles.bannerHeader}>
        <div style={styles.summoner}>{labels.summoner}</div>
        <div style={styles.position}>{labels.position}</div>
      </div>
      {renderedRows}
    </div>
  );
};

LiveTeamContainer.propTypes = {
  title: PropTypes.string.isRequired,
  staticDataUrl: PropTypes.string,
  data: PropTypes.object,
  staticChampions: PropTypes.object,
};

LiveTeamContainer.defaultProps = {
  staticDataUrl: null,
  data: [],
  staticChampions: null,
};

export default LiveTeamContainer;
