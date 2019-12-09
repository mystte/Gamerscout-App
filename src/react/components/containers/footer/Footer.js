import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Localization from '../../../config/localization/Localization';
import styles from './styles';

const Footer = () => {
  const name = 'FunctionnalComponent';
  const labels = Localization.Labels.footer;

  return (
    <div style={styles.container}>
      <div style={styles.menuContainer}>
        <Link style={styles.link}>{labels.contact}</Link>
        <Link style={styles.link}>{labels.privacyPolicy}</Link>
        <Link style={styles.link}>{labels.terms}</Link>
      </div>
      <div style={styles.socialsContainer}>
        ada
      </div>
    </div>
  );
};

Footer.propTypes = {
};

Footer.defaultProps = {
};

export default Footer;
