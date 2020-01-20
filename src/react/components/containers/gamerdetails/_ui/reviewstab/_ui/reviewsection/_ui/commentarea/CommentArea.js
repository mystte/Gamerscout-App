import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ClickAwayListener } from '@material-ui/core';

import Localization from '../../../../../../../../../config/localization/Localization';
import styles from './styles';
import ApprovalsToggle from './_ui/approvalstoggle/ApprovalsToggle';
import AddButton from '../../../../../../../../views/addbutton/AddButton';
import AttributesModal from '../attributesmodal/AttributesModal';
import AttrIcon from '../attricon/AttrIcon';
import Button, {
  BUTTON_THEME,
} from '../../../../../../../../views/elements/button/Button';

const CommentArea = ({
  preselect,
  selectedAttributes,
  onSelectAttribute,
  resetAttributes,
  onApprovalsSelect,
  onChange,
}) => {
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
        {selectedAttributes.length > 0 && (
          <div style={styles.buttonContainer}>
            <Button
              icon="close"
              onClick={resetAttributes}
              theme={BUTTON_THEME.SIMPLE}
            />
          </div>
        )}
        {renderedAttributes}
      </div>
    );
  };

  const toggleModal = () => {
    setShowAttributes(!showAttributes);
  };

  return (
    <div style={styles.container}>
      <textarea
        style={styles.textarea}
        placeholder={labels.desc}
        maxLength="500"
        onChange={e => onChange(e.target.value)}
      />
      <div style={styles.horizontalSeparator}></div>
      <div style={styles.actionsBar}>
        <ApprovalsToggle
          onApprovalsSelect={onApprovalsSelect}
          preselect={preselect}
        />
        <div style={styles.attributesContainer}>
          {renderSelectedAttributes()}
          <AddButton onClick={toggleModal} />
          {showAttributes && (
            <ClickAwayListener onClickAway={toggleModal}>
              <div>
                <AttributesModal
                  onSelectAttribute={onSelectAttribute}
                  selectedAttributes={selectedAttributes}
                />
              </div>
            </ClickAwayListener>
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
  resetAttributes: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onApprovalsSelect: PropTypes.func.isRequired,
};

CommentArea.defaultProps = {
  preselect: null,
  selectedAttributes: [],
};

export default CommentArea;
