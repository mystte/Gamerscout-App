import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';
import { List } from 'immutable';

const Input = ({
  placeholder,
  title,
  value,
}) => {
  return (
    <div>
      { title &&
        <div style={styles.title}>{title}</div>
      }
      <input
        style={styles.input}
        placeholder={placeholder}
        value={value}
      />
    </div>
  );
}

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  isFocused: PropTypes.bool,
};

Input.defaultProps = {
  placeholder: null,
  value: null,
  isFocused: false,
};

export default Input;
