import React , { useState } from 'react';
import { useSelector } from 'react-redux';

import Localization from '../../../config/localization/Localization';
import styles from './styles';
import SettingsNav from './_ui/settingsnav/SettingsNav';
import { NAV_SECTION } from './enums'
import ProfileInformation from './_ui/profileinformation/ProfileInformation';
import EmailAndPassword from './_ui/emailandpassword/EmailAndPassword';
import ConnectedAccounts from './_ui/connectedaccounts/ConnectedAccounts';

const Settings = () => {
  const labels = Localization.Labels.settings;
  const [selectedNav, setSelectedNav] = useState(NAV_SECTION.PROFILE);
  const [editingSection, setEditingSection] = useState(null);
  const connectedUser = useSelector(state => state.app.getIn(['data', 'user']));

  if (!connectedUser) return null;

  const onSettingsUpdate = (type, data) => {
    console.log("##### On Settings update click", type, data);
    if (editingSection === type) {
      setEditingSection(null);
    } else {
      setEditingSection(type);
      setSelectedNav(type);
    }

  }

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
          />
          <ConnectedAccounts
            onUpdate={onSettingsUpdate}
            isEditMode={editingSection === NAV_SECTION.ACCOUNTS}
          />
        </div>
      </div>
    </div>
  );
}

export default Settings;