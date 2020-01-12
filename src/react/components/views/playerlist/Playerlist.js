import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SVGIcon from '../elements/svgicon/SVGIcon';

const Playerlist = ({ players, goToPlayer }) => (
  <div style={styles.container}>
    {players.map((playerData, idx) => {
      const playerCardStyle = idx === 0 ? styles.firstPlayerCard : {};

      return (
        <div
          onClick={() => goToPlayer(playerData)}
          style={{
            ...styles.playerCardContainer,
            ...playerCardStyle,
          }}
          key={`${playerData.gamertag}-${playerData.region}${idx}`}
        >
          <img
            style={styles.profileImg}
            src={playerData.profile_picture}
            alt="profilePicture"
            height="38"
            width="38"
          />
          <div style={styles.gamerContainer}>
            <div style={styles.gamertag}>{playerData.gamertag}</div>
            <div style={styles.region}>
              {playerData.game}({playerData.region.toUpperCase()})
            </div>
          </div>
          <div style={styles.likesContainer}>
            <div style={styles.rep}>
              <span style={styles.repNum}>{playerData.rep_review_count}</span>
              <SVGIcon width={12} height={12} name="thumb-up" />
            </div>
            <div style={styles.flame}>
              <span style={styles.flameNum}>
                {playerData.flame_review_count}
              </span>
              <SVGIcon width={12} height={12} name="thumb-down" />
            </div>
          </div>
        </div>
      );
    })}
  </div>
);

Playerlist.propTypes = {
  players: PropTypes.object,
  goToPlayer: PropTypes.func,
};

Playerlist.defaultProps = {
  players: () => {},
  goToPlayer: null,
};

export default Playerlist;
