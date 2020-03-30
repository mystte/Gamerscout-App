import React, { useState } from 'react';
import PropTypes from 'prop-types';

import HistoryListRecord from '../../../../../../../../datamanager/models/HistoryListRecord';
import styles from './styles';
import HistoryCard from './_ui/historycard/HistoryCard';
import Localization from '../../../../../../../../config/localization/Localization';
import SVGIcon, {
  IMG_TYPE,
} from '../../../../../../../views/elements/svgicon/SVGIcon';

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
    if (historyCardList.historyCards && historyCardList.historyCards.size > 0) {
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
    } else {
      renderedView = (
        <div style={styles.zeroStateContainer}>
          <span style={styles.title}>{labels.title}</span>
          <div style={styles.iconContainer}>
            <SVGIcon
              width={102}
              height={61}
              type={IMG_TYPE.PNG}
              name="no-data"
            />
          </div>
        </div>
      );
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
