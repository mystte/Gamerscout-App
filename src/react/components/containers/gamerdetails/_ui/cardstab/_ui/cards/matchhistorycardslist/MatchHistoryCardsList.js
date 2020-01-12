import React, { useState } from 'react';
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
  const [display, setDisplay] = useState(5);
  const labels = Localization.Labels.gamerDetails.historyCard;

  const onShowMoreClick = () => {
    setDisplay(display + 5);
  };

  const renderShowMoreAction = () =>
    display <= historyCardList.historyCards.size ? (
      <div onClick={onShowMoreClick} style={styles.showMoreContainer}>
        <div style={styles.separator}></div>
        <div style={styles.showMoreLabel}>{labels.showMore}</div>
        <div style={styles.separator}></div>
      </div>
    ) : null;

  const renderCards = () => {
    let renderedView = null;
    if (historyCardList.historyCards) {
      renderedView = historyCardList.historyCards.map((record, idx) => {
        const key = `historyCard$${idx}`;
        return idx < display ? (
          <div style={styles.historyCardContainer} key={key}>
            <HistoryCard
              historyCardRecord={record}
              staticDataUrl={staticDataUrl}
              doSearchPlayer={doSearchPlayer}
            />
          </div>
        ) : (
          <div key={key} />
        );
      });
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
