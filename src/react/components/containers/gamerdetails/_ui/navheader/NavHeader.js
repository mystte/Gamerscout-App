import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ActionButtons from './_ui/actionbuttons/ActionButtons';
import styles from './styles';

class NavHeader extends PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div style={styles.container}>
        <ActionButtons />
      </div>
    );
  }
}

export default NavHeader;
