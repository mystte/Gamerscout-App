import React from 'react';
import PropTypes from 'prop-types';

import {
  getLolChampionImgUrl,
  getLolSpellImgUrl,
  getPerksSpellImgUrl,
} from '../../../../../../../../../../../../utils/lol';
import styles from './styles';

const ChampionImg = ({
  championId,
  championName,
  championLevel,
  spell1Id,
  spell2Id,
  win,
  staticDataUrl,
  lane,
  perks,
}) => {
  const championLevelStyle =
    lane !== 'NONE'
      ? styles.championLevel
      : { ...styles.championLevel, bottom: 0 };
  const championBorder = win
    ? {
        ...styles.champIcon,
        ...styles.champIconWin,
      }
    : {
        ...styles.champIcon,
        ...styles.champIconloss,
      };

  const renderChampionAvatar = () => (
    <div style={styles.innerContentContainer}>
      <div style={styles.championImgContainer}>
        <div style={styles.championsInnerContent}>
          <img
            style={championBorder}
            alt={`champion ${championId} icon`}
            src={getLolChampionImgUrl(staticDataUrl, championName)}
          ></img>
          <span style={championLevelStyle}>{championLevel}</span>
          {lane !== 'NONE' && <span style={styles.lane}>{lane}</span>}
        </div>
      </div>
      <div style={styles.spellsContainer}>
        {spell1Id && (
          <img
            style={styles.spell}
            alt={'spell1Icon'}
            src={getLolSpellImgUrl(staticDataUrl, spell1Id)}
          ></img>
        )}
        {spell2Id && (
          <img
            style={styles.spell}
            alt={'spell2Icon'}
            src={getLolSpellImgUrl(staticDataUrl, spell2Id)}
          ></img>
        )}
      </div>
      <div style={styles.perksContainer}>
        <img
          style={styles.spell}
          alt={'perk1Icon'}
          src={getPerksSpellImgUrl(staticDataUrl, perks[0].icon)}
        ></img>
        <img
          style={styles.spell}
          alt={'perk2Icon'}
          src={getPerksSpellImgUrl(staticDataUrl, perks[1].icon)}
        ></img>
      </div>
    </div>
  );

  return <div style={styles.container}>{renderChampionAvatar()}</div>;
};

ChampionImg.propTypes = {
  championId: PropTypes.number.isRequired,
  championName: PropTypes.string.isRequired,
  championLevel: PropTypes.number.isRequired,
  win: PropTypes.bool.isRequired,
  staticDataUrl: PropTypes.string,
  spell1Id: PropTypes.number,
  spell2Id: PropTypes.number,
  perks: PropTypes.array,
  lane: PropTypes.string,
};

ChampionImg.defaultProps = {
  staticDataUrl: null,
  lane: null,
  perks: [],
};

export default ChampionImg;
