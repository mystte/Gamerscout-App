import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const GamerAvatar = ({
  gamertag,
  iconUrl,
  level,
  region,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.iconContainer}>
        <img
          style={styles.icon}
          alt={`profile ${gamertag} icon`}
          src={iconUrl}
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
  gamertag: PropTypes.string,
  region: PropTypes.string,
  iconUrl: PropTypes.string,
  level: PropTypes.number,
};

GamerAvatar.defaultProps = {
  iconUrl: 'https://ddragon.leagueoflegends.com/cdn/6.24.1/img/profileicon/23.png',
  level: 1,
  region: null,
  gamertag: null,
};

export default GamerAvatar;
