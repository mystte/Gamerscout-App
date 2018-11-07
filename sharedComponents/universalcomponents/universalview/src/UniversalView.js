import React from 'react';
import ReactResizeDetector from 'react-resize-detector';
import { propTypes, defaultProps } from './props';
import { transformObjectToWebInline } from '../../transformHelper';
import { hexToRgbA, colorNameToHex } from '../../../../sharedUtils/color';

const UniversalView = ({
  children,
  testId,
  transform,
  dropShadow,
  style,
  pointerEvents,
  onResize,
  // Props used for native only - not used here
  renderAsKeyboardView,
  behavior,
  keyboardVerticalOffset,
  contentContainerStyle,
  // Props to forward
  ...props
}) => {
  let mergedStyles = style;
  if (!mergedStyles) {
    mergedStyles = {};
  }


  if (pointerEvents) {
    if (pointerEvents === 'box-none') {
      console.warn("ATTENTION !!! pointerEvents: box-none n'est pas implémenté en WEB.");
    } else {
      mergedStyles = { ...mergedStyles, pointerEvents };
    }
  }

  if (transform) {
    mergedStyles = { ...mergedStyles, transform: transformObjectToWebInline(transform) };
  }

  if (dropShadow) {
    const {
      shadowOffset: { width, height },
      shadowRadius,
      shadowColor,
      shadowOpacity,
    } = dropShadow;

    // Apply opacity to color
    const rgbacolor = hexToRgbA(colorNameToHex(shadowColor), shadowOpacity);

    mergedStyles = {
      ...mergedStyles,
      filter: `drop-shadow(${width}px ${height}px ${shadowRadius}px ${rgbacolor})`,
    };
  }

  let onResizeListener = null;
  if (onResize) {
    onResizeListener = <ReactResizeDetector handleWidth handleHeight onResize={onResize} />;
  }
  return (
    <div {...props} data-testid={testId} style={mergedStyles}>
      {onResizeListener}
      {children}
    </div>
  );
};

UniversalView.propTypes = propTypes;
UniversalView.defaultProps = defaultProps;

export default UniversalView;

