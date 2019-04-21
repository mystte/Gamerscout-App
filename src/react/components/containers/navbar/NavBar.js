import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../../views/elements/svgicon/SVGIcon';
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
        <SVGIcon
          width={120}
          height={22}
          name="logo-beta"
        />
      </div>
    );
  }
}

export default NavBar;
