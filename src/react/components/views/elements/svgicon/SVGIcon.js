import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    width: 30,
    height: 30,
  },
};

export const SVG_TYPE = {
  SVG: 'svg',
  PNG: 'png',
  JPG: 'jpg',
};

const SVGIcon = ({
  name,
  width,
  height,
  type,
}) => {
  const containerStyle = {
    width: (width) ? width : styles.container.width,
    height: (height) ? height : styles.container.height,
  };

  let imgSrc = null;
  if (type === SVG_TYPE.SVG) {
    imgSrc = require(`../../../../../assets/svg/${name}.svg`);
  } else if (type === SVG_TYPE.PNG || type === SVG_TYPE.JPG) {
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
    PropTypes.number
  ]),
  height: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  type: PropTypes.string,
};

SVGIcon.defaultProps = {
  width: null,
  height: null,
  type: SVG_TYPE.SVG,
};

export default SVGIcon;
