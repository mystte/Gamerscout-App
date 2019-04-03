import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Input , {INPUT_TYPE} from '../../views/elements/input/Input';
import styles from './styles';

class Home extends Component {
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
        <h2>THIS IS HOME</h2>
        <Input
          placeholder='placeholder'
          value='input value jack'
          title='input title'
          onChange={() => {}}
          message='feedback message'
          type={INPUT_TYPE.TEXT}
          length="2"
        />
      </div>
    );
  }
}

export default Home;
