import React from 'react';
import PropTypes from 'prop-types';

import { colorNameToHex } from '../../../../../../../utils/color';

const Rectangle = ({
  width,
  height,
  colorName,
}) => {
  const containerStyle = {
    width,
    height,
    backgroundColor: colorNameToHex(colorName),
  };

  return (
    <div className="loading" style={containerStyle} />
  );
};

Rectangle.propTypes = {
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  colorName: PropTypes.string,
};

Rectangle.defaultProps = {
  width: 120,
  height: 15,
  colorName: 'oxfordblue',
};

export default Rectangle;
