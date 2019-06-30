import React , { useState } from 'react';
import Localization from '../../../config/localization/Localization';
// import PropTypes from 'prop-types';

import styles from './styles';
import SettingsNav from './_ui/settingsnav/SettingsNav';
import { NAV_SECTION } from './enums'
import ProfileInformation from './_ui/profileinformation/ProfileInformation';
import EmailAndPassword from './_ui/emailandpassword/EmailAndPassword';
import ConnectedAccounts from './_ui/connectedaccounts/ConnectedAccounts';

const Settings = () => {
  const labels = Localization.Labels.settings;
  const [selectedNav, setSelectedNav] = useState(NAV_SECTION.PROFILE);

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.contentContainer}>
        <SettingsNav
          selectedNav={selectedNav}
          onNavSelect={(section) => setSelectedNav(section)}
        />
        <div style={styles.settingsDataContainer}>
          <ProfileInformation />
          <EmailAndPassword />
          <ConnectedAccounts />
        </div>
      </div>
    </div>
  );
}

Settings.propTypes = {
};

Settings.defaultProps = {
};

export default Settings;
