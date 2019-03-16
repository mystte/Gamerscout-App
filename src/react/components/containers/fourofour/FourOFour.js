import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

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

  shouldComponentUpdate(nextProps, nextState) {
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
