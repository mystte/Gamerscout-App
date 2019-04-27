import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class RankedCard extends PureComponent {
  static propTypes = {
    data: PropTypes.array.isRequired,
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
        
      </div>
    );
  }
}

export default RankedCard;
