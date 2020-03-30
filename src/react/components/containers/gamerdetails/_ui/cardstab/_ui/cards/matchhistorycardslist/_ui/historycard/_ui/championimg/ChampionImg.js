import React from 'react';
import PropTypes from 'prop-types';

import {
  getLolChampionImgUrl,
  getLolSpellImgUrl,
  getPerksSpellImgUrl,
} from '../../../../../../../../../../../../utils/lol';
import styles from './styles';
import UseMediaQueries from '../../../../../../../../../../../views/hooks/UseMediaQueries';

const ChampionImg = ({
  championId,
  championName,
  championLevel,
  spell1Id,
  spell2Id,
  win,
  staticDataUrl,
  lane,
  role,
  perk1,
  perk2,
}) => {
  const { getResponsiveStyle } = UseMediaQueries();
  const championLevelStyle =
    lane !== 'NONE' || role !== 'NONE'
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

  const getPlayedRole = () => {
    let cLane = lane;

    if (role === 'DUO_CARRY') cLane = 'ADC';
    else if (role === 'DUO_SUPPORT') cLane = 'SUPPORT';
    else if (lane === 'NONE' && role !== 'NONE') cLane = role;
    return lane ? <span style={styles.lane}>{cLane}</span> : null;
  };

  const renderChampionAvatar = () => (
    <div style={styles.innerContentContainer}>
      <div style={styles[getResponsiveStyle('championImgContainer')]}>
        <div style={styles.championsInnerContent}>
          <img
            style={championBorder}
            alt={`champion ${championId} icon`}
            src={getLolChampionImgUrl(staticDataUrl, championName)}
          ></img>
          <span style={championLevelStyle}>{championLevel}</span>
          {getPlayedRole()}
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
          src={getPerksSpellImgUrl(staticDataUrl, perk1.icon)}
        ></img>
        <img
          style={styles.spell}
          alt={'perk2Icon'}
          src={getPerksSpellImgUrl(staticDataUrl, perk2.icon)}
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
  perk1: PropTypes.object,
  perk2: PropTypes.object,
  lane: PropTypes.string,
  role: PropTypes.string,
};

ChampionImg.defaultProps = {
  staticDataUrl: null,
  lane: null,
  role: null,
  perk1: null,
  perk2: null,
};

export default ChampionImg;
