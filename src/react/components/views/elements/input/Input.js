import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SVGIcon from '../svgicon/SVGIcon';

export const ICON_POSITION = {
  LEFT: 'ICON_POSITION_LEFT',
  RIGHT: 'ICON_POSITION_RIGHT',
};

export const INPUT_THEME = {
  DEFAULT: 'defaultTheme',
};

export const INPUT_TYPE = {
  EMAIL: 'email',
  TEXT: 'text',
  PASSWORD: 'password',
};

const Input = ({
  length,
  message,
  onChange,
  placeholder,
  title,
  type,
  theme,
  initValue,
  focus,
  inputStyle,
  icon,
  iconPosition,
  error,
  valid,
}) => {
  const [ref, setRef] = useState('');
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState(initValue);
  const [toggleFocus, setToggleFocus] = useState(false);
  const focusStyle = (toggleFocus) ? styles.focus : null;
  const errorStyle = (error) ? styles.error : null;
  const validStyle = (valid) ? styles.valid : null;
  const passwordStyle = (type === INPUT_TYPE.PASSWORD) ? styles.inputPassword : null;

  const mergedInputStyle = {
    ...styles.input,
    ...styles[theme],
    ...inputStyle,
    ...passwordStyle,
    ...focusStyle,
    ...errorStyle,
    ...validStyle,
  };

  const renderedIcon = () => {
    let iconToRender = null;
    if (iconPosition === ICON_POSITION.LEFT) {
      iconToRender = (
        <div style={{
          ...styles.iconLeftContainer,
          ...focusStyle,
          ...errorStyle,
          ...validStyle,
        }}>
          <SVGIcon
            width={16}
            name={icon}
          />
        </div>
      );
    } else if (iconPosition === ICON_POSITION.RIGHT) {
      iconToRender = (
        <div style={styles.iconRightContainer}>
          <SVGIcon
            width={16}
            name={icon}
          />
        </div>
      );
    }
    return iconToRender;
  };

  const onInputChange = (e) => {
    setValue(e.target.value);
    if (onChange) onChange(e);
  };

  useEffect(() => {
    if (ref && focus && !mounted) {
      ref.focus();
      setToggleFocus(true);
    }
    if (ref && !mounted) setMounted(true);
  });

  return (
    <div>
      {title
        && <div style={styles.title}>{title}</div>
      }
      <div style={styles.inputContainer}>
        {icon && iconPosition === ICON_POSITION.LEFT
          && renderedIcon()
        }
        <input
          className="input-animation"
          ref={(input) => { setRef(input); }}
          style={mergedInputStyle}
          onFocus={() => setToggleFocus(true)}
          onBlur={() => setToggleFocus(false)}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onInputChange}
          maxLength={length}
        />
        {icon && iconPosition === ICON_POSITION.RIGHT
          && renderedIcon()
        }
      </div>
      {message
        && <div className="input-animation" style={styles.message}>{message}</div>
      }
    </div>
  );
};

Input.propTypes = {
  length: PropTypes.string,
  onChange: PropTypes.func,
  message: PropTypes.string,
  placeholder: PropTypes.string,
  title: PropTypes.string,
  initValue: PropTypes.string,
  focus: PropTypes.bool,
  inputStyle: PropTypes.object,
  type: PropTypes.string,
  theme: PropTypes.string,
  icon: PropTypes.string,
  iconPosition: PropTypes.string,
  error: PropTypes.bool,
  valid: PropTypes.bool,
};

Input.defaultProps = {
  length: '42',
  message: null,
  placeholder: null,
  title: null,
  initValue: '',
  focus: false,
  onChange: null,
  inputStyle: null,
  type: INPUT_TYPE.TEXT,
  theme: INPUT_THEME.DEFAULT,
  icon: null,
  iconPosition: ICON_POSITION.LEFT,
  error: false,
  valid: false,
};

export default Input;
