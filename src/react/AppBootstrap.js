import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withCookies } from 'react-cookie';

import AppRouter from './router/AppRouter';
import {
  loadAppData,
  togglePopup,
} from './redux/actions/app';
import Localization from './config/localization/Localization';
import Popup from './components/views/elements/popup/Popup';
import { pushNotification } from './redux/actions/notifications';
import NotificationRecord, { MOCKED_NOTIFICATION } from './datamanager/models/NotificationRecord';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  user: state.app.getIn(['data', 'user']),
  popupData: state.app.getIn(['data', 'popupData']),
  loading: state.app.get('loading'),
  error: state.app.get('error'),
});

class AppBootstrap extends PureComponent {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    cookies: PropTypes.object,
    popupData: PropTypes.object,
    user: PropTypes.object,
  };

  static defaultProps = {
    cookies: null,
    showPopup: false,
    popupData: null,
    user: null,
  };

  constructor(props) {
    super(props);
    this.state = {};
  }

  togglePopup = () => {
    this.props.dispatch(togglePopup());
  }

  componentDidMount() {
    this.props.dispatch(loadAppData(this.props.cookies.cookies));
    // Force app in English for now
    Localization.setLanguage('en');
  }

  componentDidUpdate() {
    if (this.props.user) {
      if (this.props.cookies.get('gamerscout-api-session') !== this.props.user.get('sessionId')) {
        this.props.cookies.set('gamerscout-api-session', this.props.user.get('sessionId'));
      }

      if (!this.props.user.validated) {
        this.props.dispatch(pushNotification(NotificationRecord.getMockedNotif(MOCKED_NOTIFICATION.INVALID_ACCOUNT)));
        this.props.dispatch(pushNotification(NotificationRecord.getMockedNotif(MOCKED_NOTIFICATION.INVALID_ACCOUNT1)));
        this.props.dispatch(pushNotification(NotificationRecord.getMockedNotif(MOCKED_NOTIFICATION.INVALID_ACCOUNT2)));
      }
    }
  }

  render() {
    const showPopup = this.props.popupData ? this.props.popupData.get('showPopup') : false;
    const type = this.props.popupData ? this.props.popupData.get('type') : null;

    return (
      <React.Fragment>
        <AppRouter cookies={ this.props.cookies } />
        <Popup
          show={showPopup}
          togglePopup={this.togglePopup}
          type={type}
        />
      </ React.Fragment>
    );
  }
}

export default withCookies(
  connect(mapStateToProps)(AppBootstrap)
);
