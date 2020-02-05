import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Localization from '../../../../../../../../../../config/localization/Localization';
import HistoryCardRecord, {
  QUEUE_TYPES,
  OTHER_QUEUE_TYPES,
} from '../../../../../../../../../../datamanager/models/HistoryCardRecord';
import ChampionImg from './_ui/championimg/ChampionImg';
import styles from './styles';
import UsedItems from './_ui/useditems/UsedItems';
import PlayersList from './_ui/playerslist/PlayersList';

const HistoryCard = ({ historyCardRecord, staticDataUrl, doSearchPlayer }) => {
  const labels = Localization.Labels.gamerDetails.historyCard;
  const gameDuration = moment
    .utc(historyCardRecord.gameDuration * 1000)
    .format('mm[m] s[s]');

  const containerStyle = historyCardRecord.win
    ? {
        ...styles.container,
        ...styles.winContainer,
      }
    : {
        ...styles.container,
        ...styles.lossContainer,
      };

  const getGameName = () => {
    return historyCardRecord.queueType !== 'OTHER'
      ? QUEUE_TYPES[historyCardRecord.queueType]
      : OTHER_QUEUE_TYPES[historyCardRecord.gameMode];
  };

  return (
    <div style={containerStyle}>
      <div style={styles.topContainer}>
        <span style={styles.gameType}>{getGameName()}</span>
        <span style={styles.time}>
          {moment(historyCardRecord.startDate).fromNow()}
        </span>
        <span style={styles.dotSeparator}>.</span>
        <span style={styles.time}>{gameDuration}</span>
      </div>
      <div style={styles.bottomContainer}>
        <ChampionImg
          spell1Id={historyCardRecord.spell1Id}
          spell2Id={historyCardRecord.spell2Id}
          championId={historyCardRecord.championId}
          championName={historyCardRecord.champion}
          championLevel={historyCardRecord.championLevel}
          win={historyCardRecord.win}
          staticDataUrl={staticDataUrl}
          lane={historyCardRecord.lane}
        />
        <div style={styles.killsContainer}>
          <div style={styles.kills}>
            <span style={styles.textData}>{historyCardRecord.kills}</span>
            <span style={styles.slashSeparator}>/</span>
            <span style={styles.textData}>{historyCardRecord.deaths}</span>
            <span style={styles.slashSeparator}>/</span>
            <span style={styles.textData}>{historyCardRecord.assists}</span>
          </div>
          <div style={styles.kdaContainer}>
            <span style={styles.kdaTitle}>{historyCardRecord.kda}</span>
            <span style={styles.kdaLabel}>{labels.kda}</span>
          </div>
        </div>
        <div style={styles.csContainer}>
          <span style={styles.csTitle}>{historyCardRecord.cs}</span>
          <span style={styles.csLabel}>{labels.cs}</span>
        </div>
        <div style={styles.usedItemsContainer}>
          <UsedItems
            staticDataUrl={staticDataUrl}
            items={historyCardRecord.items}
          />
        </div>
        <div style={styles.playersListContainer}>
          <PlayersList
            staticDataUrl={staticDataUrl}
            opponents={historyCardRecord.opponents}
            teammates={historyCardRecord.teammates}
            doSearchPlayer={doSearchPlayer}
          />
        </div>
      </div>
    </div>
  );
};

HistoryCard.propTypes = {
  historyCardRecord: PropTypes.instanceOf(HistoryCardRecord),
  staticDataUrl: PropTypes.string,
  doSearchPlayer: PropTypes.func.isRequired,
};

HistoryCard.defaultProps = {
  historyCardRecord: null,
  staticDataUrl: null,
};

export default HistoryCard;
