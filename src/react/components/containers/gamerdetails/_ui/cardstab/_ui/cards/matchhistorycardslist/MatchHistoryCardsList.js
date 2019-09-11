import React from 'react';
import PropTypes from 'prop-types';

import HistoryListRecord from '../../../../../../../../datamanager/models/HistoryListRecord';
import styles from './styles';
import HistoryCard from './_ui/historycard/HistoryCard';
import Localization from '../../../../../../../../config/localization/Localization';

const MathHistoryCardsList = ({
  historyCardList,
  staticDataUrl,
  doSearchPlayer,
}) => {
  const labels = Localization.Labels.gamerDetails.historyCard;

  const renderShowMoreAction = () => (
    <div style={styles.showMoreContainer}>
      <div style={styles.separator}></div>
      <div style={styles.showMoreLabel}>{labels.showMore}</div>
      <div style={styles.separator}></div>
    </div>
  );

  const renderCards = () => {
    let renderedView = null;
    if (historyCardList.historyCards) {
      renderedView = historyCardList.historyCards.map((record, idx) => (
        <div style={styles.historyCardContainer} key={`historyCard$${idx}`}>
          <HistoryCard
            historyCardRecord={record}
            staticDataUrl={staticDataUrl}
            doSearchPlayer={doSearchPlayer}
          />
        </div>
      ));
    }
    return renderedView;
  };

  return (
    <div style={styles.container}>
      {renderCards()}
      {renderShowMoreAction()}
    </div>
  );
};

MathHistoryCardsList.propTypes = {
  historyCardList: PropTypes.instanceOf(HistoryListRecord),
  staticDataUrl: PropTypes.string,
  doSearchPlayer: PropTypes.func.isRequired,
};

MathHistoryCardsList.defaultProps = {
  historyCardList: null,
  staticDataUrl: null,
};

export default MathHistoryCardsList;
