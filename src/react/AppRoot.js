import React, { PureComponent } from 'react';
import { UniversalView, UniversalText } from '../../sharedComponents/universalcomponents';

const styles = {
  container: {
    position: 'relative',
  },
};

class AppRoot extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <UniversalView style={styles.container}>
        <UniversalText>Gamerscout App Is Initialized</UniversalText>
      </UniversalView>
    );
  }
}

export default AppRoot;
