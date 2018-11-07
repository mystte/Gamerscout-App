import React from 'react';
import { propTypes, defaultProps } from './props';
import { transformObjectToWebInline } from '../../transformHelper';

const multilignTruncate = (lineClamp) => {
  return {
    display: '-webkit-box',
    WebkitLineClamp: lineClamp,
    WebkitBoxOrient: 'vertical',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
  };
};

const textTruncate = {
  display: 'block', // Ugly, but needed to get the auto text ellipsis if the line is too long
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
};

const UniversalText = ({
  children,
  testId,
  numberOfLines,
  selectable,
  style,
  transform,
  textUnderline,
  onStartShouldSetResponder,
  ...props
}) => {
  let mergedStyles = style;
  if (!mergedStyles) {
    mergedStyles = {};
  }

  if (transform) {
    mergedStyles = { ...mergedStyles, transform: transformObjectToWebInline(transform) };
  }

  if (numberOfLines === 1) {
    mergedStyles = { ...mergedStyles, ...textTruncate };
  } else if (numberOfLines > 1) {
    mergedStyles = { ...mergedStyles, ...multilignTruncate(numberOfLines) };
  }

  if (!selectable) {
    mergedStyles = { ...mergedStyles, userSelect: 'none' };
  } else {
    mergedStyles = { ...mergedStyles, userSelect: 'auto' };
  }

  if (textUnderline) {
    mergedStyles.textDecoration = 'underline';
  }

  return (
    <span
      {...props}
      data-testid={testId}
      style={mergedStyles}
    >
      {children}
    </span>
  );
};

UniversalText.propTypes = propTypes;
UniversalText.defaultProps = defaultProps;

export default UniversalText;

