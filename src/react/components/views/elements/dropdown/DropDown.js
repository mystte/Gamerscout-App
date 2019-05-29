import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';

class DropDown extends PureComponent {
  static propTypes = {
    contentList: PropTypes.array.isRequired,
    select: PropTypes.number,
  };

  static defaultProps = {
    select: 0,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  toggleListView = () => {
  }

  render() {

    return (
      <div
        onClick={this.toggleListView}
        style={styles.container}>

      </div>
    );
  }
}

export default DropDown;
