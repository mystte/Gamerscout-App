import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles';

import AttributeRecord from '../../../../../../../../../datamanager/models/AttributeRecord';
import SVGIcon, { IMG_TYPE } from '../../../../../../../../views/elements/svgicon/SVGIcon';
import Localization from '../../../../../../../../../config/localization/Localization';

const AttributeRow = ({ attributeRecord }) => {
  const labels = Localization.Labels.attributes;

  return (
    <div style={styles.container}>
      <div style={styles.icon}>
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
          <div style={{
            ...styles.blueZone,
            width: `${attributeRecord.ratio}%`
          }} />
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
