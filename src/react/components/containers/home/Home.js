import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input , {INPUT_TYPE} from '../../views/elements/input/Input';
import Button from '../../views/elements/button/Button';
import {
  getGamerDetailsUrl,
} from '../../../config/routes';
import styles from './styles';

class Home extends Component {
  static propTypes = {
    history: PropTypes.func.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      searchValue: "",
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  onSearchInputChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  onSearchClick = () => {
    if (this.state.searchValue) {
      this.props.history.push(getGamerDetailsUrl("riot", "na", "leagueOfLegends", this.state.searchValue));
    }
  }

  render() {
    return (
      <div style={styles.container}>
        <Input
          placeholder='gamertag'
          value={this.state.searchValue}
          onChange={this.onSearchInputChange}
          type={INPUT_TYPE.TEXT}
          length="50"
        />
        <Button
          label="Search"
          onClick={this.onSearchClick}
        />
      </div>
    );
  }
}

export default withRouter(Home);
