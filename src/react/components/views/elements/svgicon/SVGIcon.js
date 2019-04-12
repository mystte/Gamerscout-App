import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  container: {
    width: 30,
    height: 30,
  },
};

const SVGIcon = ({
  name,
  width,
  height,
}) => {
  const containerStyle = {
    width: (width) ? width : styles.container.width,
    height: (height) ? height : styles.container.height,
  };

  return (
    <img
      style={containerStyle}
      src={require(`../../../../../assets/svg/${name}.svg`)}
    />)
  };

SVGIcon.propTypes = {
  name: PropTypes.string.isRequired,
  width: PropTypes.number,
  height: PropTypes.number,
};

SVGIcon.defaultProps = {
  width: null,
  height: null,
};

export default SVGIcon;
