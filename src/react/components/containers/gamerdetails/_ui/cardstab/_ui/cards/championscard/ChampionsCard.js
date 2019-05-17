import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import TabSelector from '../../../../../../../views/elements/tabselector/TabSelector';
import styles from './styles';

class ChampionsCard extends PureComponent {
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
        ChampionsCard
      </div>
    );
  }
}

export default ChampionsCard;
