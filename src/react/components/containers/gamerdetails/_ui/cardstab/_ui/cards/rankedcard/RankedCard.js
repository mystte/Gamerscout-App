import React, { useState } from 'react';
import PropTypes from 'prop-types';

import RankedCardRecord from '../../../../../../../../datamanager/models/RankedCardRecord';
import TabSelector from '../../../../../../../views/elements/tabselector/TabSelector';
import RankedTab from './_ui/rankedtab/RankedTab';
import styles from './styles';
import UseMediaQueries from '../../../../../../../views/hooks/UseMediaQueries';

const RankedCard = ({ gameCode, platform, rankedCardRecord }) => {
  const { getResponsiveStyle } = UseMediaQueries();
  const [headerList] = useState(
    rankedCardRecord.getRankedCardTabHeader(platform, gameCode)
  );

  const renderedTabs = headerList.map((header, idx) => {
    const filteredRankedData = rankedCardRecord.tabsList.filter(
      tabData => tabData.title === header.title
    );

    return (
      <RankedTab
        key={`rankedTab${idx}`}
        rankedData={
          filteredRankedData.size > 0 ? filteredRankedData.get(0) : null
        }
      />
    );
  });

  return (
    <div style={styles[getResponsiveStyle('container')]}>
      <TabSelector headerList={headerList} contentList={renderedTabs} />
    </div>
  );
};

RankedCard.propTypes = {
  gameCode: PropTypes.string.isRequired,
  platform: PropTypes.string.isRequired,
  rankedCardRecord: PropTypes.instanceOf(RankedCardRecord).isRequired,
};

export default RankedCard;
