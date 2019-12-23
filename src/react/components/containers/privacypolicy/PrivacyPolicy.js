import React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles';
import Footer from '../footer/Footer';

const PrivacyPolicy = () => {
  const name = 'PrivacyPolicy';

  return (
    <div style={styles.container}>
      {name}
      <Footer />
    </div>
  );
};

PrivacyPolicy.propTypes = {
};

PrivacyPolicy.defaultProps = {
};

export default PrivacyPolicy;
