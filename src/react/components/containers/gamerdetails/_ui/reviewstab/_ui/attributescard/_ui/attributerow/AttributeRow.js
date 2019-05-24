import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

import AttributeRecord, { ATTRIBUTE_TYPE } from '../../../../../../../../../datamanager/models/AttributeRecord';
import SVGIcon, { IMG_TYPE } from '../../../../../../../../views/elements/svgicon/SVGIcon';
import Localization from '../../../../../../../../../config/localization/Localization';

const AttributeRow = ({ attributeRecord }) => {
  const labels = Localization.Labels.attributes;
  let gaugeSelectedStyle = {
    ...styles.gaugeSelected,
    ...styles.blueZone,
    width: `${attributeRecord.ratio}%`,
  };

  let iconStyle = {
    ...styles.icon,
    ...styles.iconGood,
  };

  if (attributeRecord.type === ATTRIBUTE_TYPE.BAD) {
    gaugeSelectedStyle = {
      ...gaugeSelectedStyle,
      ...styles.redZone,
    };

    iconStyle = {
      ...iconStyle,
      ...styles.iconBad,
    };
  }

  return (
    <div style={styles.container}>
      <div style={iconStyle}>
        <SVGIcon
          width={30}
          height={30}
          type={IMG_TYPE.PNG}
          name={`attributes/${attributeRecord.name}`}
        />
      </div>
      <div style={styles.gaugeContainer}>
        <div style={styles.gauge}>
          <div style={styles.greyZone} />
          <div style={gaugeSelectedStyle} />
        </div>
        <div style={styles.name}>{labels[attributeRecord.name]}</div>
      </div>
      <div style={styles.ratio}>{`${attributeRecord.ratio}%`}</div>
    </div>
  );
}

AttributeRow.propTypes = {
  attributeRecord: PropTypes.instanceOf(AttributeRecord),
};

AttributeRow.defaultProps = {
  attributeRecord: null,
};

export default AttributeRow;
