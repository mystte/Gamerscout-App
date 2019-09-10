import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Localization from '../../../../../../../../../../config/localization/Localization';
import HistoryCardRecord from '../../../../../../../../../../datamanager/models/HistoryCardRecord';
import ChampionImg from './_ui/championimg/ChampionImg';
import styles from './styles';
import UsedItems from './_ui/useditems/UsedItems';

const HistoryCard = ({
  historyCardRecord,
  staticDataUrl,
}) => {
  const labels = Localization.Labels.gamerDetails.historyCard;
  console.log('historyCardRecord,', historyCardRecord);

  const containerStyle = historyCardRecord.win ? {
    ...styles.container,
    ...styles.winContainer,
  } : {
    ...styles.container,
    ...styles.lossContainer,
  };

  return (
    <div style={containerStyle}>
      <div style={styles.topContainer}>
        <span style={styles.gameType}>RANKED SOLO</span>
        <span style={styles.time}>{moment(historyCardRecord.startDate).fromNow()}</span>
        <span style={styles.dotSeparator}>.</span>
        <span style={styles.time}>32m 45s</span>
      </div>
      <div style={styles.bottomContainer}>
        <ChampionImg
          championId={historyCardRecord.championId}
          championName={historyCardRecord.champion}
          championLevel={historyCardRecord.championLevel}
          win={historyCardRecord.win}
          staticDataUrl={staticDataUrl}
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
      </div>
    </div>
  );
};

HistoryCard.propTypes = {
  historyCardRecord: PropTypes.instanceOf(HistoryCardRecord),
  staticDataUrl: PropTypes.string,
};

HistoryCard.defaultProps = {
  historyCardRecord: null,
  staticDataUrl: null,
};

export default HistoryCard;
