import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class DropDown extends PureComponent {
  static propTypes = {
    contentList: PropTypes.array.isRequired,
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
      <div style={styles.container}></div>
    );
  }
}

export default DropDown;
