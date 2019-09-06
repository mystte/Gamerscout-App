import React from 'react';
import PropTypes from 'prop-types';

import { getLolChampionImgUrl, getLolSpellImgUrl } from '../../../../../../../../../../../../utils/lol';
import styles from './styles';

const ChampionImg = ({
  championId,
  championName,
  championLevel,
}) => {
  const renderChampionAvatar = () => (
    <div style={styles.innerContentContainer}>
      <div style={styles.championImgContainer}>
        <img
          style={styles.champIcon}
          alt={`champion ${championId} icon`}
          src={getLolChampionImgUrl(championName)}
        ></img>
        <span style={styles.championLevel}>{championLevel}</span>
      </div>
      <img
        style={styles.spell}
        alt={'spell 1 icon'}
        src={getLolSpellImgUrl()}
      ></img>
      <img
        style={styles.spell}
        alt={'spell 2 icon'}
        src={getLolSpellImgUrl()}
      ></img>
    </div>
  );

  return (
    <div style={styles.container}>
      {renderChampionAvatar()}
    </div>
  );
};

ChampionImg.propTypes = {
  championId: PropTypes.number.isRequired,
  championName: PropTypes.string.isRequired,
  championLevel: PropTypes.number.isRequired,
};

ChampionImg.defaultProps = {
};

export default ChampionImg;
