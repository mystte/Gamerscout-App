import React from 'react';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';

import Localization from '../../../config/localization/Localization';
import styles from './styles';
import SVGIcon from '../../views/elements/svgicon/SVGIcon';
import { getPrivacyPolicyUrl, getTermsAndConditionsUrl } from '../../../config/routes';

const Footer = () => {
  const labels = Localization.Labels.footer;

  return (
    <div style={styles.container}>
      <div style={styles.menuContainer}>
        <a href="mailto:team@gamerscout.com" style={styles.link}>{labels.contact}</a>
        <Link to={getPrivacyPolicyUrl()} style={styles.link}>{labels.privacyPolicy}</Link>
        <Link to={getTermsAndConditionsUrl()} style={styles.link}>{labels.terms}</Link>
      </div>
      <div style={styles.socialContainer}>
        <a
          href="https://discord.gg/SwyfPe"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SVGIcon
            height={18}
            name="discord-logo"
          />
        </a>
        <a
          href="https://www.facebook.com/gamerscoutHQ/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SVGIcon
            height={18}
            name="facebook"
          />
        </a>
        <a
          href="https://twitter.com/GamerscoutHQ"
          target="_blank"
          rel="noreferrer noopener"
        >
          <SVGIcon
            height={18}
            name="twitter"
          />
        </a>
      </div>
    </div>
  );
};

Footer.propTypes = {
};

Footer.defaultProps = {
};

export default Footer;
