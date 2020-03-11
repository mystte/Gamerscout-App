import React, { useState } from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles';
import Localization from '../../../../../../../config/localization/Localization';
import AttributeRow from './_ui/attributerow/AttributeRow';
import UseMediaQueries from '../../../../../../views/hooks/UseMediaQueries';

const AttributesCard = ({ attributesList }) => {
  const [expanded, setExpanded] = useState(false);
  const { getResponsiveStyle } = UseMediaQueries();

  const toggleShowAll = () => {
    setExpanded(!expanded);
  };

  const renderAttributes = () => {
    const sortedAttributesList = attributesList.sort((a, b) => {
      if (a.ratio < b.ratio) return 1;
      if (a.ratio > b.ratio) return -1;
      return 0;
    });
    return sortedAttributesList.map((attribute, idx) =>
      (!expanded && idx < 3) || expanded ? (
        <AttributeRow key={`attribute-${idx}`} attributeRecord={attribute} />
      ) : (
        <div key={`attribute-${idx}`} />
      )
    );
  };

  if (!attributesList) return null;
  const labels = Localization.Labels.gamerDetails.attributesCard;
  const containerStyle = expanded
    ? {
        ...styles[getResponsiveStyle('container')],
        ...styles.expandedContainer,
      }
    : styles[getResponsiveStyle('container')];

  return (
    <div style={containerStyle}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.attributesList}>{renderAttributes()}</div>
      <div style={styles.footer}>
        <button style={styles.showAll} onClick={toggleShowAll}>
          {!expanded && labels.showAll}
          {expanded && labels.showLess}
        </button>
      </div>
    </div>
  );
};

AttributesCard.propTypes = {
  attributesList: PropTypes.object,
};

AttributesCard.defaultProps = {
  attributesList: null,
};

export default AttributesCard;
