import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Avatar from '../../../../../../views/avatar/Avatar';
import DropDown, { SELECT_TYPE, DROPDOWN_TYPE } from '../../../../../../views/elements/dropdown/DropDown';
import Localization from '../../../../../../../config/localization/Localization';
import { USER_MENU_ACTIONS } from '../../enums';

const UserActionsWidget = ({
  user,
  onUserActions,
}) => {
  const labels = Localization.Labels.navBar.userMenuOptions;

  const onDropdownSelect = (action) => {
    let userAction = null;
    if (action.name === labels.profile) {
      userAction = USER_MENU_ACTIONS.PROFILE;
    } else if (action.name === labels.settings) {
      userAction = USER_MENU_ACTIONS.SETTINGS;
    } else if (action.name === labels.logout) {
      userAction = USER_MENU_ACTIONS.LOGOUT;
    }
    onUserActions(userAction);
  }

  const getAvatar = () => {
    return <Avatar
      name={user.username}
      width={36}
      height={36}
    />
  }

  return (
    <div style={styles.container}>
      <DropDown
        options={
        Object.values(labels).map((label) => {
          return {
            name: label,
            label: label,
          }
        })
      }
        selectType={SELECT_TYPE.CUSTOM_CONTENT}
        selectContent={getAvatar()}
        dropDown={DROPDOWN_TYPE.DEFAULT}
        onChange={onDropdownSelect}
      />
    </div>
  );
}

UserActionsWidget.propTypes = {
  user: PropTypes.object.isRequired,
  onUserActions: PropTypes.func.isRequired,
};

UserActionsWidget.defaultProps = {
};

export default UserActionsWidget;
