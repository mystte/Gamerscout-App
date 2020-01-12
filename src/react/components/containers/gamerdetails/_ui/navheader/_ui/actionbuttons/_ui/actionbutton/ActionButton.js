import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../../../config/localization/Localization';
import SVGIcon from '../../../../../../../../views/elements/svgicon/SVGIcon';
import styles from './styles';

export const BUTTON_TYPE = {
  OVERVIEW: 'overview',
  REVIEWS: 'reviews',
  CHAMPIONS: 'champions',
  LEAGUES: 'leagues',
  LIVE_MATCH: 'liveMatch',
};

const ActionButton = ({ selected, type, onClick }) => {
  let buttonStyle = { ...styles.button };
  if (type === BUTTON_TYPE.LIVE_MATCH)
    buttonStyle = { ...buttonStyle, ...styles.lastButton };
  if (selected) buttonStyle = { ...buttonStyle, ...styles.selected };

  return (
    <button
      style={buttonStyle}
      onClick={() => {
        onClick(type);
      }}
    >
      {type === BUTTON_TYPE.LIVE_MATCH && (
        <div style={styles.icon}>
          <SVGIcon name="live-match" width={8} height={8} />
        </div>
      )}
      <div style={styles.label}>{Localization.Labels.gamerDetails[type]}</div>
    </button>
  );
};

ActionButton.propTypes = {
  selected: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

ActionButton.defaultProps = {
  selected: false,
};

export default ActionButton;
