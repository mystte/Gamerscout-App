import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import Button from '../../../../views/elements/button/Button';
import styles from './styles';
import UserActionsWidget from './_ui/useractionswidget/UserActionsWidget';
import { USER_MENU_ACTIONS } from './enums';

const UserMenu = ({ isAuthenticated, userMenuActions, user }) => {
  const labels = Localization.Labels.navBar;

  return (
    <div style={styles.container}>
      {isAuthenticated && (
        <div>
          <UserActionsWidget user={user} onUserActions={userMenuActions} />
        </div>
      )}
      {!isAuthenticated && (
        <div style={styles.signinSignupContainer}>
          <Button
            label={labels.login}
            buttonStyle={styles.buttonLabel}
            onClick={() => userMenuActions(USER_MENU_ACTIONS.SIGNIN)}
          />
          <Button
            label={labels.signup}
            buttonStyle={styles.buttonLabel}
            onClick={() => userMenuActions(USER_MENU_ACTIONS.SIGNUP)}
          />
        </div>
      )}
    </div>
  );
};

UserMenu.propTypes = {
  isAuthenticated: PropTypes.bool,
  userMenuActions: PropTypes.func.isRequired,
  user: PropTypes.object,
};

UserMenu.defaultProps = {
  isAuthenticated: false,
  user: null,
};

export default UserMenu;
