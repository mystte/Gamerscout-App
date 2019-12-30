import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import AttrIcon from '../attricon/AttrIcon';

const AttributesModal = ({ onSelectAttribute }) => {
  const attributesList = useSelector((state) => state.gamerDetails.getIn(['data', 'attributesList']));

  const renderAttributes = () => (
    attributesList.map((attr, idx) => (
        <div onClick={() => onSelectAttribute(attr)} key={`row-attr-${attr.id}`} style={styles.row}>
          <div style={styles.attrItem}>
            <AttrIcon attribute={attr}/>
            <div style={styles.attrName}>{attr.name}</div>
          </div>
          {idx + 1 !== (attributesList.size) && <div style={styles.separator} />}
      </div>))
  );

  return (
    <div style={styles.container}>
      {renderAttributes()}
    </div>
  );
};

AttributesModal.propTypes = {
  onSelectAttribute: PropTypes.func.isRequired,
};

AttributesModal.defaultProps = {
};

export default AttributesModal;
