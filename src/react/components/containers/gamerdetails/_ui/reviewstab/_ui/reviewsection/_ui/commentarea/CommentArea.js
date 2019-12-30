import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../../../config/localization/Localization';
import styles from './styles';
import ApprovalsToggle from './_ui/approvalstoggle/ApprovalsToggle';
import AddButton from '../../../../../../../../views/addbutton/AddButton';
import AttributesModal from '../attributesmodal/AttributesModal';
import AttrIcon from '../attricon/AttrIcon';

const CommentArea = ({ preselect, selectedAttributes, onSelectAttribute }) => {
  const labels = Localization.Labels.gamerDetails.attributesCard.reviewSection;
  const [showAttributes, setShowAttributes] = useState(false);

  const renderSelectedAttributes = () => {
    console.log('selectedAttributes = ', selectedAttributes);

    return selectedAttributes.map((attr) => {
      console.log(attr);
      return (<span style={styles.attributeIconContainer} key={attr.id}>
        <AttrIcon attribute={attr} />
      </span>);
    });
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
        <ApprovalsToggle
          preselect={preselect}
        />
        <div style={styles.attributesContainer}>
          {renderSelectedAttributes()}
          <AddButton
            onClick={() => {
              setShowAttributes(!showAttributes);
            }}
          />
          {showAttributes && <AttributesModal
            onSelectAttribute={onSelectAttribute}
          />}
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
