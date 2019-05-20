import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import AppRouter from './router/AppRouter';
import { loadAppData } from './redux/actions/app';
import Localization from './config/localization/Localization';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  loading: state.app.get('loading'),
  error: state.app.get('error'),
});

class AppBootstrap extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(loadAppData());
    // Force app in English for now
    Localization.setLanguage('en');
  }

  render() {
    return (
      <AppRouter />
    );
  }
}

export default connect(mapStateToProps)(AppBootstrap);
