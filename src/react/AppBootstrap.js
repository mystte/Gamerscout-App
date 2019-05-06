import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import AppRouter from './router/AppRouter';
import { loadAppData } from './redux/actions/app';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  loading: state.app.get('loading'),
  error: state.app.get('error'),
});

class AppBootstrap extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(loadAppData());
  }

  render() {
    return (
      <AppRouter />
    );
  }
}

export default connect(mapStateToProps)(AppBootstrap);
