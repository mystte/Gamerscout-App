import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import NavHeader from './_ui/navheader/NavHeader';
import CardsGrid from './_ui/cardsgrid/CardsGrid';
import styles from './styles';

class GamerDetails extends PureComponent {
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
        <CardsGrid />
      </div>
    );
  }
}

export default GamerDetails;
