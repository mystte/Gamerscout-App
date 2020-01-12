import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import { getLolChampionImgUrl } from '../../../../../../../../../../../../utils/lol';

const PlayersList = ({
  staticDataUrl,
  opponents,
  teammates,
  doSearchPlayer,
}) => {
  const renderChampionImg = championName =>
    championName ? (
      <img
        style={styles.championImg}
        alt={`championIcon${championName}`}
        src={getLolChampionImgUrl(staticDataUrl, championName)}
      ></img>
    ) : (
      <div
        style={{
          ...styles.championImg,
          ...styles.championPlaceholder,
        }}
      ></div>
    );

  const onPlayerClick = playerName => {
    doSearchPlayer(playerName);
  };

  const renderOpponents = () => {
    const result = opponents.map((oppData, idx) => (
      <div
        className="noSelect"
        style={styles.opponentContainer}
        key={`opponent ${idx}`}
      >
        {renderChampionImg(oppData.champion)}
        <div
          onClick={() => onPlayerClick(oppData.summonerId)}
          style={{
            ...styles.summoner,
            ...styles.opponentSummoner,
          }}
          className="ellipsis"
        >
          {oppData.summonerId}
        </div>
      </div>
    ));

    return result;
  };

  const renderTeammates = () => {
    const result = teammates.map((mateData, idx) => (
      <div
        onClick={() => onPlayerClick(mateData.summonerId)}
        style={styles.teammateContainer}
        key={`teammate ${idx}`}
      >
        <span
          className="ellipsis"
          style={{
            ...styles.summoner,
            ...styles.mateSummoner,
          }}
        >
          {mateData.summonerId}
        </span>
        {renderChampionImg(mateData.champion)}
      </div>
    ));

    return result;
  };

  return (
    <div style={styles.container}>
      <div style={styles.teammatesContainer}>{renderTeammates()}</div>
      <div style={styles.opponentsContainer}>{renderOpponents()}</div>
    </div>
  );
};

PlayersList.propTypes = {
  doSearchPlayer: PropTypes.func.isRequired,
  staticDataUrl: PropTypes.string,
  opponents: PropTypes.object,
  teammates: PropTypes.object,
};

PlayersList.defaultProps = {
  staticDataUrl: null,
  opponents: [],
  teamates: [],
};

export default PlayersList;
