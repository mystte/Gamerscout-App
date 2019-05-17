import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../../../../../../../../../views/elements/svgicon/SVGIcon';
import styles from './styles';

const ReviewButton = ({ onClick }) => {
  return (
    <button
      style={styles.container}
      onClick={ onClick }
    >
      <SVGIcon
        width={9}
        height={9}
        name={'add-icon'}
      />
    </button>
  );
};

ReviewButton.propTypes = {
  onClick: PropTypes.func.isRequired,
};

ReviewButton.defaultProps = {
};

export default ReviewButton;