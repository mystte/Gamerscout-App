import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SVGIcon from '../elements/svgicon/SVGIcon';

const AddButton = ({ onClick }) => {
  return (
    <button
      style={styles.container}
      onClick={() => onClick()}
    >
      <SVGIcon
        width={6}
        height={6}
        name={'add-icon'}
      />
    </button>
  );
};

AddButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

AddButton.defaultProps = {
};

export default AddButton;
