import PropTypes from 'prop-types';
import { universalPropTypes, universalDefaultProps } from '../../universalProps';

export const propTypes = {
  ...universalPropTypes,
  numberOfLines: PropTypes.number,
  selectable: PropTypes.bool,
  textUnderline: PropTypes.bool,
};

export const defaultProps = {
  ...universalDefaultProps,
  numberOfLines: 0,
  selectable: true,
  textUnderline: false,
};
