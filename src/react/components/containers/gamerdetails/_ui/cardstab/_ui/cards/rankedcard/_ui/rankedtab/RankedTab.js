import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../../../../config/localization/Localization';
import RankedCardTabRecord from '../../../../../../../../../../datamanager/models/RankedCardTabRecord';
import Unranked from './_ui/unranked/Unranked';
import SVGIcon, { IMG_TYPE } from '../../../../../../../../../views/elements/svgicon/SVGIcon';
import styles from './styles';

const RankedTab = ({
  rankedData,
}) => {
  const rankedCardsLabels = Localization.Labels.gamerDetails.rankedCard;

  return (
    <div style={styles.container}>
      {rankedData
        && <div style={styles.cardContent}>
          <SVGIcon
            width={80}
            height={80}
            name={rankedData.leagueImgUrl}
            type={IMG_TYPE.PNG}
          />
          <div style={styles.dataContainer}>
            <div style={styles.tierContainer}>
              <div style={styles.tier}>{rankedData.tier}</div>
              <div style={styles.rankInNumber} >{rankedData.rankInNumber}</div>
            <div style={styles.points}>({rankedData.points}{rankedCardsLabels.leaguePoints})</div>
            </div>
            <div style={styles.winRateContainer}>
              <div style={styles.wins}>{rankedData.wins}{rankedCardsLabels.wins}</div>
              <div style={styles.separator}>/</div>
              <div style={styles.losses}>{rankedData.losses}{rankedCardsLabels.losses}</div>
              <div style={styles.winrate}>({rankedData.winrate}%)</div>
            </div>
          </div>
        </div>
      }
      {!rankedData
        && <Unranked />
      }
    </div>
  );
};

RankedTab.propTypes = {
  rankedData: PropTypes.instanceOf(RankedCardTabRecord),
};

RankedTab.defaultProps = {
  rankedData: null,
};

export default RankedTab;
