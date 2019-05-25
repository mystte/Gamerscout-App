import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SVGIcon from '../../../../../../../../../../../../views/elements/svgicon/SVGIcon';
import Localization from '../../../../../../../../../../../../../config/localization/Localization';
import { APPROVAL_TYPE } from '../../../../../../../../../../../../../datamanager/models/ApprovalsCardRecord';

const ToggleButton = ({
  selected,
  onClick,
  type,
}) => {
  const labels = Localization.Labels.gamerDetails.attributesCard.reviewSection;
  const buttonStyle = (selected) ? {
    ...styles.approveButton,
    ...styles.selectedButton,
  } : styles.approveButton;
  const labelStyle = (selected) ? styles.labelSelected : styles.label;
  const title = (type === APPROVAL_TYPE.DISAPPROVAL) ? labels.disapprove : labels.approve;
  const icon = (type === APPROVAL_TYPE.DISAPPROVAL) ? 'thumb-down' : 'thumb-up';

  return (
    <button
      style={buttonStyle}
      onClick={() => onClick(type)}
    >
      <SVGIcon
        width={12}
        height={12}
        name={icon}
      />
      <span style={labelStyle}>{title}</span>
    </button>
  );
}

ToggleButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  selected: PropTypes.bool,
};

ToggleButton.defaultProps = {
  selected: false,
};

export default ToggleButton;
