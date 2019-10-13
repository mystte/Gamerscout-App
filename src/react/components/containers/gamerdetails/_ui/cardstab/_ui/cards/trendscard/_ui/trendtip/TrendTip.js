import React from 'react';
// import PropTypes from 'prop-types';

import styles from './styles';

const FunctionnalComponent = () => {
  const name = 'TrendTrip';

  return (
    <div style={styles.container}>
      {name}
    </div>
  );
};

FunctionnalComponent.propTypes = {
};

FunctionnalComponent.defaultProps = {
};

export default FunctionnalComponent;
