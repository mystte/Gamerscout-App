import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

import {
  getHomeUrl,
} from '../../../config/routes';
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
      <Link style={styles.container}
        to={getHomeUrl()}
      >
        <SVGIcon
          width='120'
          height='22'
          name="logo-beta"
        />
      </Link>
    );
  }
}

export default NavBar;
