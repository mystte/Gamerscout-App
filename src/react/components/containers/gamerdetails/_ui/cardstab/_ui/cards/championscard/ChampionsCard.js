import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import TabSelector from '../../../../../../../views/elements/tabselector/TabSelector';
import ChampionsCardRecord, { CHAMPIONS_CARD_TAB } from '../../../../../../../../datamanager/models/ChampionsCardRecord';
import ChampionStats from './_ui/championstats/ChampionStats';
import PositionStats from './_ui/positionstats/PositionStats';

const ChampionsCard = ({
  championsCardRecord,
  staticDataUrl,
}) => {
  const getHeaderList = () => (
    championsCardRecord ? championsCardRecord.getChampionsCardTabHeader() : []
  );

  const getContentList = () => (
    championsCardRecord ? championsCardRecord.getChampionsCardTabHeader().map((header, idx) => (
      <div key={`header${idx}`}>
        {header.title === CHAMPIONS_CARD_TAB.CHAMPIONS
          && <ChampionStats
            staticDataUrl={staticDataUrl}
            championsStatsList={championsCardRecord.championsStatsList}
          />}
        {header.title === CHAMPIONS_CARD_TAB.POSITIONS
          && <PositionStats />}
      </div>
    )) : []
  );

  return (
    <div style={styles.container}>
      <TabSelector
        headerList={getHeaderList()}
        contentList={getContentList()}
      />
    </div>
  );
};

ChampionsCard.propTypes = {
  championsCardRecord: PropTypes.instanceOf(ChampionsCardRecord),
  staticDataUrl: PropTypes.string,
};

ChampionsCard.defaultProps = {
  championsCardRecord: null,
  staticDataUrl: null,
};

export default ChampionsCard;
