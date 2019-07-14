import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SVGIcon from '../svgicon/SVGIcon';

const Checkbox = ({
  label,
  disabled,
  isSelected,
}) => {
  const [selected, setSelected] = useState(isSelected ? isSelected : false);
  let disabledStyle = {};
  let selectedStyle = {};

  if (disabled) disabledStyle = styles.disabled;
  if (selected) selectedStyle = styles.selected;

  const onClick = () => {
    setSelected(!selected);
  }

  return (
    <div
      className="noselect"
      onClick={disabled ? null : onClick}
      style={styles.container}
    >
      <div style={styles.checkbox}>
        {selected &&
          <div style={{
            ...styles.selectedContainer,
            ...disabledStyle,
          }}>
            <SVGIcon
              width={7}
              height={6}
              name={'check'}
            />
          </div>
        }
      </div>
      {label &&
        <span style={{
          ...styles.label,
          ...selectedStyle,
          ...disabledStyle,
        }}>{label}</span>
      }
    </div>
  );
}

Checkbox.propTypes = {
  label: PropTypes.string,
  disabled: PropTypes.bool,
  isSelected: PropTypes.bool,
};

Checkbox.defaultProps = {
  label: null,
  disabled: false,
  isSelected: false,
};

export default Checkbox;
