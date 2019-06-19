import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../svgicon/SVGIcon';
import styles from './styles';

export const BUTTON_TYPE = {
  ERROR: 'error',
  DEFAULT: 'default',
  DROPDOWN: 'dropdown',
};

export const BUTTON_THEME = {
  BLUE: 'blue',
  DARK: 'dark',
  RED: 'red',
  GREY: 'grey',
  SIMPLE: 'simple',
  LINK: 'link',
};

class Button extends PureComponent {
  static propTypes = {
    label: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    theme: PropTypes.string,
    buttonStyle: PropTypes.object,
  };

  static defaultProps = {
    icon: null,
    type: BUTTON_TYPE.DEFAULT,
    theme: BUTTON_THEME.DARK,
    label: null,
    buttonStyle: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const iconContainerStyle = (this.props.theme === BUTTON_THEME.SIMPLE) ? {} : styles.iconContainer;

    return (
      <button
        onClick={this.props.onClick}
        style={{
          ...styles.container,
          ...styles[this.props.theme],
          ...this.props.buttonStyle,
        }}
      >
        { this.props.icon &&
          <span style={iconContainerStyle}>
            <SVGIcon width='16' height='16' name={this.props.icon} />
          </span>
        }
        <span>{this.props.label}</span>
      </button>
    );
  }
}

export default Button;
