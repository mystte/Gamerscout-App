/* eslint-disable no-restricted-globals */
import React, { PureComponent } from 'react';

class FourOFour extends PureComponent {
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
      <div>
        <h3>
          404 - No match for <code>{location.pathname}</code>
        </h3>
      </div>
    );
  }
}

export default FourOFour;
