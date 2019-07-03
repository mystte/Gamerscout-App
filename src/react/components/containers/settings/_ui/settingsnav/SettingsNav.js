import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import NavElem from './_ui/navelem/NavElem';
import { NAV_SECTION } from '../../enums';

const SettingsNav = ({
  selectedNav,
  onNavSelect,
}) => {
  const labels = Localization.Labels.settings.nav;

  return (
    <div style={styles.container}>
      <NavElem
        selected={selectedNav === NAV_SECTION.PROFILE}
        label={labels.profile}
        type={NAV_SECTION.PROFILE}
        onClick={onNavSelect}
      />
      <NavElem
        selected={selectedNav === NAV_SECTION.EMAIL}
        label={labels.emailPassword}
        type={NAV_SECTION.EMAIL}
        onClick={onNavSelect}
      />
      <NavElem
        selected={selectedNav === NAV_SECTION.ACCOUNTS}
        label={labels.accounts}
        type={NAV_SECTION.ACCOUNTS}
        onClick={onNavSelect}
      />
    </div>
  );
}

SettingsNav.propTypes = {
  selectedNav: PropTypes.string.isRequired,
  onNavSelect: PropTypes.func.isRequired,
};

SettingsNav.defaultProps = {
};

export default SettingsNav;
