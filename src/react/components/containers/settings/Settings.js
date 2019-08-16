import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Localization from '../../../config/localization/Localization';
import styles from './styles';
import SettingsNav from './_ui/settingsnav/SettingsNav';
import { NAV_SECTION } from './enums';
import ProfileInformation from './_ui/profileinformation/ProfileInformation';
import EmailAndPassword from './_ui/emailandpassword/EmailAndPassword';
import ConnectedAccounts from './_ui/connectedaccounts/ConnectedAccounts';
import { clearAppError, doUpdatePassword, togglePopup } from '../../../redux/actions/app';
import { POPUP_TYPE } from '../../../datamanager/models/PopupRecord';
import { APP, loading } from '../../../redux/actions/actionTypes';


const Settings = () => {
  const labels = Localization.Labels.settings;
  const [selectedNav, setSelectedNav] = useState(NAV_SECTION.PROFILE);
  const [editingSection, setEditingSection] = useState(null);
  const connectedUser = useSelector((state) => state.app.getIn(['data', 'user']));
  const dispatch = useDispatch();

  if (!connectedUser) return null;

  const onSettingsUpdate = (type, data) => {
    console.log('##### On Settings update click', type, data);
    if (data) {
      if (type === NAV_SECTION.EMAIL) {
        const params = {
          onValidAction: loading(APP.DO_UPDATE_USER),
          data: {
            email: data.email,
            id: connectedUser.id,
          },
        };
        dispatch(togglePopup(POPUP_TYPE.CONFIRM_PWD, true, params));
      } else if (type === NAV_SECTION.PASSWORD) {
        dispatch(doUpdatePassword({
          userId: connectedUser.id,
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        }));
      }
    } else if (editingSection === type) {
      dispatch(clearAppError());
      setEditingSection(null);
    } else {
      dispatch(clearAppError());
      setEditingSection(type);
      setSelectedNav(type === NAV_SECTION.PASSWORD ? NAV_SECTION.EMAIL : type);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.contentContainer}>
        <SettingsNav
          selectedNav={selectedNav}
          onNavSelect={(section) => onSettingsUpdate(section)}
        />
        <div style={styles.settingsDataContainer}>
          <ProfileInformation
            onUpdate={onSettingsUpdate}
            isEditMode={editingSection === NAV_SECTION.PROFILE}
          />
          <EmailAndPassword
            onUpdate={onSettingsUpdate}
            isEditEmailMode={editingSection === NAV_SECTION.EMAIL}
            isEditPasswordMode={editingSection === NAV_SECTION.PASSWORD}
            email={connectedUser.email}
            isVerified={connectedUser.validated}
        />
          <ConnectedAccounts
            onUpdate={onSettingsUpdate}
            isEditMode={editingSection === NAV_SECTION.ACCOUNTS}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
