import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class GamerDetails extends Component {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div style={styles.container}>
        Gamer Details
      </div>
    );
  }
}

export default GamerDetails;
