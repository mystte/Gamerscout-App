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
  value,
  focus,
}) => {
  const [ref, setRef] = useState('');
  const [mounted, setMounted] = useState(false);

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
        style={styles.input}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
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
  onChange: PropTypes.func.isRequired,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string,
  focus: PropTypes.bool
};

Input.defaultProps = {
  length: "42",
  message: null,
  placeholder: null,
  title: null,
  value: "",
  message: null,
  focus: false,
};

export default Input;
