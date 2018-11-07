import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import {
  universalPropTypes,
  universalDefaultProps,
} from '../../universalProps';

class UniversalButton extends PureComponent {
  static propTypes = {
    ...universalPropTypes,
    onPress: PropTypes.func.isRequired,
    disabled: PropTypes.bool,
    style: PropTypes.shape({}),
  }

  static defaultProps = {
    ...universalDefaultProps,
    style: {},
    disabled: false,
    testId: 'UniversalButton',
  }

  onPress = (e) => {
    this.props.onPress(e, this.buttonRef);
  }

  render() {
    let customStyle = {};
    if (this.props.disabled) {
      customStyle = { opacity: 0.5 };
    }

    return (
      <button
        ref={(ref) => { this.buttonRef = ref; }}
        onClick={this.onPress}
        style={{ ...this.props.style, ...customStyle }}
        data-testid={this.props.testId}
        type="button"
        {...(this.props.disabled ? { disabled: 'disabled' } : {})}
      >
        {this.props.children}
      </button>
    );
  }
}

export default UniversalButton;
