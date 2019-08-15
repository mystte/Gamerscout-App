import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../../../config/localization/Localization';
import styles from './styles';
import ApprovalsToggle from './_ui/approvalstoggle/ApprovalsToggle';
import AddButton from '../../../../../../../../views/addbutton/AddButton';

const CommentArea = ({ preselect }) => {
  const labels = Localization.Labels.gamerDetails.attributesCard.reviewSection;

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
          <AddButton
            onClick={() => {}}
          />
          <span style={styles.attributesLabel}>{labels.attributes}</span>
        </div>
      </div>
    </div>
  );
};

CommentArea.propTypes = {
  preselect: PropTypes.string,
};

CommentArea.defaultProps = {
  preselect: null,
};

export default CommentArea;
