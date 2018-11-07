import PropTypes from 'prop-types';

const supportedTransformProps = [
  'perspective',
  'rotate',
  'rotateX',
  'rotateY',
  'rotateZ',
  'scaleX',
  'scaleY',
  'translateX',
  'translateY',
  'skewX',
  'skewY',
];

export const transformPropType = PropTypes.arrayOf((propValue, key) => {
  const prop = propValue[key];
  const propsKeysCount = Object.keys(prop).length;
  if (propsKeysCount > 1) return new Error('transform wrong props');

  const keyName = Object.keys(prop)[0];
  const keyIsSupported = supportedTransformProps.indexOf(keyName) !== -1;
  if (!keyIsSupported) return new Error(`transform ${keyName} is not supported`);

  return true;
});

export const universalPropTypes = {
  testId: PropTypes.string,
  children: PropTypes.node,
  transform: transformPropType,
  style: PropTypes.shape({}),
};

export const universalDefaultProps = {
  testId: null,
  children: null,
  transform: null,
  style: null,
};

