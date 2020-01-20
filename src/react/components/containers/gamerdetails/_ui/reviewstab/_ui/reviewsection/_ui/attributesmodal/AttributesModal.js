import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import styles from './styles';
import AttrIcon from '../attricon/AttrIcon';
import SVGIcon from '../../../../../../../../views/elements/svgicon/SVGIcon';

const AttributesModal = ({ onSelectAttribute, selectedAttributes }) => {
  const attributesList = useSelector(state =>
    state.gamerDetails.getIn(['data', 'attributesList'])
  );

  const renderAttributes = () =>
    attributesList.map((attr, idx) => {
      const isSelected = selectedAttributes.find(e => e.id === attr.id);
      const nameStyle = isSelected
        ? { ...styles.attrName, ...styles.selected }
        : styles.attrName;
      return (
        <div
          onClick={() => onSelectAttribute(attr)}
          key={`row-attr-${attr.id}`}
        >
          <div style={styles.attrItem}>
            <AttrIcon attribute={attr} />
            <div style={nameStyle}>{attr.name}</div>
            {isSelected && (
              <div style={styles.tick}>
                <SVGIcon width={11} name="tick" />
              </div>
            )}
          </div>
          {idx + 1 !== attributesList.size && <div style={styles.separator} />}
        </div>
      );
    });

  return <div style={styles.container}>{renderAttributes()}</div>;
};

AttributesModal.propTypes = {
  onSelectAttribute: PropTypes.func.isRequired,
  selectedAttributes: PropTypes.array.isRequired,
};

AttributesModal.defaultProps = {};

export default AttributesModal;
