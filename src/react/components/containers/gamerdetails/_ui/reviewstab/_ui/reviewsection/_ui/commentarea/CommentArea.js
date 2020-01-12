import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../../../config/localization/Localization';
import styles from './styles';
import ApprovalsToggle from './_ui/approvalstoggle/ApprovalsToggle';
import AddButton from '../../../../../../../../views/addbutton/AddButton';
import AttributesModal from '../attributesmodal/AttributesModal';
import AttrIcon from '../attricon/AttrIcon';
import Button from '../../../../../../../../views/elements/button/Button';

const CommentArea = ({ preselect, selectedAttributes, onSelectAttribute }) => {
  const labels = Localization.Labels.gamerDetails.attributesCard.reviewSection;
  const [showAttributes, setShowAttributes] = useState(false);

  const renderSelectedAttributes = () => {
    const containerStyle =
      selectedAttributes.length > 0 ? styles.attributesWrapper : null;

    const renderedAttributes = selectedAttributes.map(attr => (
      <div style={styles.attributeIconContainer} key={attr.id}>
        <AttrIcon attribute={attr} />
      </div>
    ));

    return (
      <div style={containerStyle}>
        <Button />
        {renderedAttributes}
      </div>
    );
  };

  return (
    <div style={styles.container}>
      <textarea
        style={styles.textarea}
        placeholder={labels.desc}
        maxLength="500"
      />
      <div style={styles.horizontalSeparator}></div>
      <div style={styles.actionsBar}>
        <ApprovalsToggle preselect={preselect} />
        <div style={styles.attributesContainer}>
          {renderSelectedAttributes()}
          <AddButton
            onClick={() => {
              setShowAttributes(!showAttributes);
            }}
          />
          {showAttributes && (
            <AttributesModal onSelectAttribute={onSelectAttribute} />
          )}
          <span style={styles.attributesLabel}>{labels.attributes}</span>
        </div>
      </div>
    </div>
  );
};

CommentArea.propTypes = {
  preselect: PropTypes.string,
  selectedAttributes: PropTypes.array,
  onSelectAttribute: PropTypes.func.isRequired,
};

CommentArea.defaultProps = {
  preselect: null,
  selectedAttributes: [],
};

export default CommentArea;
