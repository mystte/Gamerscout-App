import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../../../../config/localization/Localization';
import styles from './styles';
import SVGIcon, {
  IMG_TYPE,
} from '../../../../../../../../../views/elements/svgicon/SVGIcon';

const PositionStats = ({ positionsStatsList }) => {
  const labels = Localization.Labels.gamerDetails.championsCard;

  const renderPositionsStats = () =>
    positionsStatsList.map((position, idx) => {
      const rowContainerStyle =
        idx + 1 === positionsStatsList.size
          ? styles.positionRowContainer
          : {
              ...styles.positionRowContainer,
              ...styles.withSeparator,
            };

      return (
        <div style={rowContainerStyle} key={`${position.positionType}Position`}>
          <div style={styles.positionContainer}>
            <SVGIcon
              width={30}
              height={30}
              type={IMG_TYPE.PNG}
              name={`lol/positions/${position.positionType}`}
            />
            <span style={styles.positionTypeLabel}>
              {labels.roles[position.positionType]}
            </span>
          </div>
          <div style={styles.kdaContainer}>
            <span style={styles.kda}>{position.kda}</span>
            <span style={styles.kdaLbl}>{labels.kda}</span>
          </div>
          <div style={styles.ratioContainer}>{position.ratio}%</div>
          <div style={styles.winsLossesContainer}>
            {position.wins}
            {labels.wins}
            <span style={styles.slash}>/</span>
            {position.losses}
            {labels.losses}
          </div>
        </div>
      );
    });

  return <div style={styles.container}>{renderPositionsStats()}</div>;
};

PositionStats.propTypes = {
  positionsStatsList: PropTypes.object,
};

PositionStats.defaultProps = {
  positionsStatsList: [],
};

export default PositionStats;
