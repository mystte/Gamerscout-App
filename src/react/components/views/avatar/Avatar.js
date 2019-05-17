import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class Avatar extends PureComponent {
  static propTypes = {
    name: PropTypes.string,
  };

  static defaultProps = {
    name: null,
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
    return (
      <div style={styles.container}>
        {this.renderAvatar()}
      </div>
    );
  }
}

export default Avatar;
