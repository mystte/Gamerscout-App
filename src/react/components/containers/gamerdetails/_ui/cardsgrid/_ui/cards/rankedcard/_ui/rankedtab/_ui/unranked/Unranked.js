import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../../../../../../config/localization/Localization';
import SVGIcon, { IMG_TYPE } from '../../../../../../../../../../../views/elements/svgicon/SVGIcon';
import styles from './styles';

const Unranked = ({}) => {
  return (
    <div style={styles.container}>
      <SVGIcon
        width={80}
        height={80}
        name={`lolRankingIcons/unranked`}
        type={IMG_TYPE.PNG}
      />
      <div style={styles.title}>{Localization.Labels.gamerDetails.rankedCard.unranked}</div>
    </div>
  );
};

Unranked.propTypes = {
};

Unranked.defaultProps = {
};

export default Unranked;