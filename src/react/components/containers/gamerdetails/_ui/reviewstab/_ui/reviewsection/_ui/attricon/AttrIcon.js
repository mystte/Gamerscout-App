import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SVGIcon, {
  IMG_TYPE,
} from '../../../../../../../../views/elements/svgicon/SVGIcon';
import { ATTRIBUTE_TYPE } from '../../../../../../../../../datamanager/models/AttributeRecord';

const AttrIcon = ({ attribute }) => {
  const attrIconStyle =
    attribute.type === ATTRIBUTE_TYPE.NEUTRAL ||
    attribute.type === ATTRIBUTE_TYPE.GOOD
      ? styles.attrNeutral
      : styles.attrBad;

  return (
    <div style={attrIconStyle}>
      <SVGIcon
        width={28}
        height={28}
        type={IMG_TYPE.PNG}
        name={`attributes/${attribute.name}`}
      />
    </div>
  );
};

AttrIcon.propTypes = {
  attribute: PropTypes.object.isRequired,
};

AttrIcon.defaultProps = {};

export default AttrIcon;
