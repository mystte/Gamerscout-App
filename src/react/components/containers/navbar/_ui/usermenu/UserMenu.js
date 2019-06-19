import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import Button from '../../../../views/elements/button/Button';
import styles from './styles';

export const USER_MENU_ACTIONS = {
  SIGNIN: 'USER_MENU_SIGNIN',
  SIGNUP: 'USER_MENU_SIGNUP',
};

const UserMenu = ({
  isAuthenticated,
  userMenuActions,
}) => {
  const labels = Localization.Labels.navBar;

  return (
    <div style={styles.container}>
      {isAuthenticated &&
        <div>authenticated</div>
      }
      {!isAuthenticated &&
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
      }
    </div>
  );
}

UserMenu.propTypes = {
  isAuthenticated: PropTypes.bool,
  userMenuActions: PropTypes.func.isRequired,
};

UserMenu.defaultProps = {
  isAuthenticated: false,
};

export default UserMenu;
