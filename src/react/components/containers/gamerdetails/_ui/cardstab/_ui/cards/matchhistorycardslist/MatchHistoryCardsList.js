import React from 'react';
import PropTypes from 'prop-types';

import HistoryListRecord from '../../../../../../../../datamanager/models/HistoryListRecord';
import styles from './styles';
import HistoryCard from './_ui/historycard/HistoryCard';

const MathHistoryCardsList = ({
  historyCardList,
}) => {
  const renderCards = () => {
    let renderedView = null;
    if (historyCardList.historyCards) {
      renderedView = historyCardList.historyCards.map((record, idx) => (
        <div style={styles.historyCardContainer} key={`historyCard$${idx}`}>
          <HistoryCard
            historyCardRecord={record}
          />
        </div>
      ));
    }
    return renderedView;
  };

  console.log('historyCardList = ', historyCardList);
  return (
    <div style={styles.container}>
      {renderCards()}
    </div>
  );
};

MathHistoryCardsList.propTypes = {
  historyCardList: PropTypes.instanceOf(HistoryListRecord),
};

MathHistoryCardsList.defaultProps = {
  historyCardList: null,
};

export default MathHistoryCardsList;
