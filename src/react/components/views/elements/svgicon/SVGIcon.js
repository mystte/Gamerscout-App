/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable-next-line import/no-dynamic-require */

import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { colorNameToHex } from '../../../../utils/color';

const styles = {
  container: {
    width: 30,
    height: 30,
    color: colorNameToHex('white'),
  },
};

export const IMG_TYPE = {
  SVG: 'svg',
  PNG: 'png',
  JPG: 'jpg',
};

const SVGIcon = ({
  name,
  width,
  height,
  color,
  type,
  isFontAwesome,
}) => {
  const containerStyle = {
    width: (width !== null) ? width : styles.container.width,
    height: (height !== null) ? height : styles.container.height,
  };

  let imgSrc = null;
  if (type === IMG_TYPE.SVG) {
    if (isFontAwesome) {
      return <FontAwesomeIcon
        icon={name}
        color={color}
      />;
    }
    imgSrc = require(`../../../../../assets/svg/${name}.svg`);
  } else if (type === IMG_TYPE.PNG || type === IMG_TYPE.JPG) {
    imgSrc = require(`../../../../../assets/img/${name}.${type}`);
  }

  return (
    <img
      style={containerStyle}
      src={imgSrc}
    />);
};

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  type: PropTypes.string,
  isFontAwesome: PropTypes.bool,
  color: PropTypes.string,
};

SVGIcon.defaultProps = {
  width: null,
  height: null,
  type: IMG_TYPE.SVG,
  isFontAwesome: false,
  color: styles.container.color,
};

export default SVGIcon;
