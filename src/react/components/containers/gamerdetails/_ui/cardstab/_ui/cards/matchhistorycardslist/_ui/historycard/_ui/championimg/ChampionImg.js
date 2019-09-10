import React from 'react';
import PropTypes from 'prop-types';

import { getLolChampionImgUrl, getLolSpellImgUrl } from '../../../../../../../../../../../../utils/lol';
import styles from './styles';

const ChampionImg = ({
  championId,
  championName,
  championLevel,
  win,
  staticDataUrl,
}) => {
  const championBorder = (win) ? {
    ...styles.champIcon,
    ...styles.champIconWin,
  } : {
    ...styles.champIcon,
    ...styles.champIconloss,
  };

  const renderChampionAvatar = () => (
    <div style={styles.innerContentContainer}>
      <div style={styles.championImgContainer}>
        <img
          style={championBorder}
          alt={`champion ${championId} icon`}
          src={getLolChampionImgUrl(staticDataUrl, championName)}
        ></img>
        <span style={styles.championLevel}>{championLevel}</span>
      </div>
      <div style={styles.spellsContainer}>
        <img
          style={styles.spell}
          alt={'spell 1 icon'}
          src={getLolSpellImgUrl(staticDataUrl, 1)}
        ></img>
        <img
          style={styles.spell}
          alt={'spell 2 icon'}
          src={getLolSpellImgUrl(staticDataUrl, 2)}
        ></img>
      </div>
      <div style={styles.perksContainer}>
        <img
          style={styles.spell}
          alt={'spell 1 icon'}
          src={getLolSpellImgUrl(staticDataUrl, 1)}
        ></img>
        <img
          style={styles.spell}
          alt={'spell 2 icon'}
          src={getLolSpellImgUrl(staticDataUrl, 2)}
        ></img>
      </div>
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
  win: PropTypes.bool.isRequired,
  staticDataUrl: PropTypes.string,
};

ChampionImg.defaultProps = {
  staticDataUrl: null,
};

export default ChampionImg;
