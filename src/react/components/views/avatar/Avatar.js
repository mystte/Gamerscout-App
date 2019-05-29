import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class Avatar extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
    width: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
    height: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
    ]),
  };

  static defaultProps = {
    name: null,
    width: 28,
    height: 28,
  };

  constructor(props) {
    super(props);
  }

  renderAvatar = () => {
    return this.props.name.split('').map((letter, idx) => {
      return (idx < 2) ? <div key={`letter-${letter}`} style={styles.letter}>{letter}</div> : null;
    });
  }

  render() {
    const containerStyle = {
      ...styles.container,
      width: this.props.width,
      height: this.props.height,
    };

    return (
      <div style={containerStyle}>
        {this.renderAvatar()}
      </div>
    );
  }
}

export default Avatar;
