import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getGamerDetailsUrl,
} from '../../../config/routes';
import {
  GAME_PLATFORM,
  GAME_REGIONS,
  GAME_CODE,
} from '../../../datamanager/models/AppRecord';
import styles from './styles';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  loading: state.app.get('loading'),
  error: state.app.get('error'),
});
class Home extends Component {
  static propTypes = {
    config: PropTypes.object,
    loading: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
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
      this.props.history.push(getGamerDetailsUrl(GAME_PLATFORM.RIOT, GAME_REGIONS.NA, GAME_CODE.LEAGUE_OF_LEGENDS, this.state.searchValue));
    }
  }

  render() {
    return (
      <div style={styles.container}>
      </div>
    );
  }
}

export default withRouter(
  connect(mapStateToProps)(Home)
);
