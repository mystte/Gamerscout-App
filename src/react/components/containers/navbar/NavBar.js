import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

class NavBar extends PureComponent {
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
        Navbar
      </div>
    );
  }
}

export default NavBar;
