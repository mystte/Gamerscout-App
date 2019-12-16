import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const Playerlist = ({ players, goToPlayer }) => {
  console.log('players = ', players);

  return (
    <div
      style={styles.container}>
      {players.map((playerData, idx) => {
        const playerCardStyle = (idx === 0) ? styles.firstPlayerCard : {};

        return (<div
          onClick={() => goToPlayer(playerData)}
          style={{
            ...styles.playerCardContainer,
            ...playerCardStyle,
          }} key={`${playerData.gamertag}-${playerData.region}${idx}`}>
            {playerData.gamertag}
          </div>);
      })}
    </div>
  );
};

Playerlist.propTypes = {
  players: PropTypes.object,
  goToPlayer: PropTypes.func,
};

Playerlist.defaultProps = {
  players: () => {},
  goToPlayer: null,
};

export default Playerlist;
