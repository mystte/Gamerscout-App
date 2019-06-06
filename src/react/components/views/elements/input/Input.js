import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

export const INPUT_TYPE = {
  TEXT: 'text',
  PASSWORD: 'password',
}

const Input = ({
  length,
  message,
  onChange,
  placeholder,
  title,
  initValue,
  focus,
  inputStyle,
}) => {
  const [ref, setRef] = useState('');
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState(initValue);

  const onInputChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  }

  useEffect(() => {
    if (ref && focus && !mounted) ref.focus();
    if (ref && !mounted) setMounted(true);
  });

  return (
    <div>
      {title &&
        <div style={styles.title}>{title}</div>
      }
      <input
        ref={(input) => { setRef(input); }}
        style={{
          ...styles.input,
          ...inputStyle
        }}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onInputChange}
        maxLength={length}
      />
      {message &&
        <div style={styles.message}>{message}</div>
      }
    </div>
  );
}

Input.propTypes = {
  length: PropTypes.string,
  onChange: PropTypes.func,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  initValue: PropTypes.string,
  focus: PropTypes.bool,
  inputStyle: PropTypes.object,
};

Input.defaultProps = {
  length: "42",
  message: null,
  placeholder: null,
  title: null,
  initValue: "",
  focus: false,
  onChange: null,
  inputStyle: null,
};

export default Input;
