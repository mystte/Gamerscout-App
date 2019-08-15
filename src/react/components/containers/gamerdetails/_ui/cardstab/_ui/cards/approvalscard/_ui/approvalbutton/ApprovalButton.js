import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../../../../../../../../../views/elements/svgicon/SVGIcon';
import styles from './styles';

const ApprovalButton = ({ onClick, type }) => (
  <button
    style={styles.container}
    onClick={() => onClick(type)}
  >
    <SVGIcon
      width={6}
      height={6}
      name={'add-icon'}
    />
  </button>
);

ApprovalButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

ApprovalButton.defaultProps = {
};

export default ApprovalButton;
