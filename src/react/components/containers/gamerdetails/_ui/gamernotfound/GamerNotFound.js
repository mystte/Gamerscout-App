import React from 'react';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';

const GamerNotFound = () => {
  const labels = Localization.Labels.gamerDetails.notFound;

  return (
    <div style={styles.container}>
      <div style={styles.title1}>{labels.title1}</div>
      <div style={styles.title2}>{labels.title2}</div>
      <div style={styles.title3}>{labels.title3}</div>
    </div>
  );
};

GamerNotFound.propTypes = {
};

GamerNotFound.defaultProps = {
};

export default GamerNotFound;
