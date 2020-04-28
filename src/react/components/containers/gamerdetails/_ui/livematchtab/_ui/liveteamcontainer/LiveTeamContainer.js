import React from 'react';
import { PropTypes } from 'prop-types';

import Localization from '../../../../../../../config/localization/Localization';
import styles from './styles';
import {
  getLolChampionImgUrl,
  getLolSpellImgUrl,
} from '../../../../../../../utils/lol';

const LiveTeamContainer = ({ staticDataUrl, title }) => {
  const labels = Localization.Labels.gamerDetails.liveMatchCard;

  const renderPlayerRow = last => {
    return (
      <div
        style={
          last
            ? { ...styles.rowContainer, borderBottom: 'none' }
            : styles.rowContainer
        }
      >
        <img
          alt={`champion icon`}
          src={getLolChampionImgUrl(staticDataUrl, 'Jinx')}
          style={styles.avatar}
        ></img>
        <div style={styles.championName}>The Dao</div>
        <div style={styles.perksContainer}>
          <img
            alt={`champion icon`}
            src={getLolSpellImgUrl(staticDataUrl, 4)}
            style={styles.perks}
          ></img>
          <img
            alt={`champion icon`}
            src={getLolSpellImgUrl(staticDataUrl, 11)}
            style={styles.perks}
          ></img>
          <div style={styles.positionDesc}>BOTTOM</div>
        </div>
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <div style={styles.title}>{title}</div>
      </div>
      <div style={styles.bannerHeader}>
        <div style={styles.summoner}>{labels.summoner}</div>
        <div style={styles.position}>{labels.position}</div>
      </div>
      {renderPlayerRow()}
      {renderPlayerRow()}
      {renderPlayerRow()}
      {renderPlayerRow()}
      {renderPlayerRow(true)}
    </div>
  );
};

LiveTeamContainer.propTypes = {
  title: PropTypes.string.isRequired,
  staticDataUrl: PropTypes.string,
};

LiveTeamContainer.propTypes = {
  staticDataUrl: null,
};

export default LiveTeamContainer;
