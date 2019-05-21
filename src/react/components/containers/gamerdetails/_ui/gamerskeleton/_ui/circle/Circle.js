import React from 'react';
import { PropTypes } from 'prop-types';

import { colorNameToHex } from '../../../../../../../utils/color';

const Circle = ({ radius, colorName }) => {
  const containerStyle = {
    width: radius * 2,
    height: radius * 2,
    backgroundColor: colorNameToHex(colorName),
    borderRadius: '50%',
  };

  return (
    <div style={containerStyle} />
  );
}

Circle.propTypes = {
  radius: PropTypes.number,
  colorName: PropTypes.string,
};

Circle.defaultProps = {
  radius: 30,
  colorName: 'oxfordblue',
};

export default Circle;
