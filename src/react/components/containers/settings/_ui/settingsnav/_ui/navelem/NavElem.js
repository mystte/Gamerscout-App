import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

const NavElem = ({
  label,
  selected,
  onClick,
  type,
 }) => {
  const labelStyle = (selected) ? {
    ...styles.container,
    ...styles.selected,
  } : {
    ...styles.container,
  };

  return (
    <div
      onClick={() => onClick(type)}
      style={labelStyle}
    >
      {label}
    </div>
  );
}

NavElem.propTypes = {
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  selected: PropTypes.bool,
};

NavElem.defaultProps = {
  label: null,
  selected: false,
};

export default NavElem;
