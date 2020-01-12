import React, { PureComponent } from 'react';

import styles from './styles';

class PureComponentTest extends PureComponent {
  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    return <div style={styles.container}>PureComponent</div>;
  }
}

export default PureComponentTest;
