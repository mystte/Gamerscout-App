import PropTypes from 'prop-types';

import {
  universalPropTypes,
  universalDefaultProps,
} from '../../universalProps';

export const propTypes = {
  ...universalPropTypes,
  pointerEvents: PropTypes.oneOf(['none', 'auto', 'box-none']),
  onResize: PropTypes.func,
  dropShadow: PropTypes.shape({
    shadowColor: PropTypes.string,
    shadowOffset: PropTypes.shape({ width: PropTypes.number, height: PropTypes.number }),
    shadowOpacity: PropTypes.number,
    shadowRadius: PropTypes.number,
  }),
  renderAsKeyboardView: PropTypes.bool,
};

export const defaultProps = {
  ...universalDefaultProps,
  pointerEvents: null,
  onResize: null,
  dropShadow: null,
  renderAsKeyboardView: false,
};
