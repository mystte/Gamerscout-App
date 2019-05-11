import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class ChampionsTab extends PureComponent {
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
        ChampionsTab
      </div>
    );
  }
}

export default ChampionsTab;
