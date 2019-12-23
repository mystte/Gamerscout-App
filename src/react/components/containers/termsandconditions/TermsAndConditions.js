import React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles';
import Footer from '../footer/Footer';

const TermsAndConditions = () => {
  const name = 'TermsAndConditions';

  return (
    <div style={styles.container}>
      {name}
      <Footer />
    </div>
  );
};

TermsAndConditions.propTypes = {
};

TermsAndConditions.defaultProps = {
};

export default TermsAndConditions;
