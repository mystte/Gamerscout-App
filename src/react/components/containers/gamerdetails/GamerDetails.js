import React, { Component } from 'react';
import NavHeader from './_ui/navheader/NavHeader';
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
        <NavHeader />
      </div>
    );
  }
}

export default GamerDetails;