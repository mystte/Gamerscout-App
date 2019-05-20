import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import SVGIcon from '../svgicon/SVGIcon';
import styles from './styles';

export const buttonType = {
  ERROR: 'error',
  DEFAULT: 'default',
  DROPDOWN: 'dropdown',
};

export const buttonTheme = {
  BLUE: 'blue',
  DARK: 'dark',
  RED: 'red',
};

class Button extends PureComponent {
  static propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    theme: PropTypes.string,
  };

  static defaultProps = {
    icon: null,
    type: buttonType.DEFAULT,
    theme: buttonTheme.DARK,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <button
        onClick={this.props.onClick}
        style={{
          ...styles.container,
          ...styles[this.props.theme],
        }}
      >
        { this.props.icon &&
          <span style={styles.iconContainer}>
            <SVGIcon width='16' height='16' name={this.props.icon} />
          </span>
        }
        <span>{this.props.label}</span>
      </button>
    );
  }
}

export default Button;
