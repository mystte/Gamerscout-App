import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const GamerAvatar = ({
  gamertag,
  icon,
  level,
  region,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <img
          style={styles.icon}
          alt={`profile ${gamertag} icon`}
          src={`https://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/${icon}.png`}
        ></img>
        <div style={styles.level}>{level}</div>
      </div>
      <div style={styles.gamertagContainer}>
        <span style={styles.gamertag}>{gamertag}</span>
        <span style={styles.region}>{region}</span>
      </div>
    </div>
  );
}

GamerAvatar.propTypes = {
  gamertag: PropTypes.string.isRequired,
  region: PropTypes.string.isRequired,
  icon: PropTypes.string,
  level: PropTypes.number,
};

GamerAvatar.defaultProps = {
  icon: '23',
  level: 1,
};

export default GamerAvatar;
