import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';

import styles from './styles';

const EmailAndPassword = ({
  isEditMode,
}) => {
  const labels = Localization.Labels.settings.emailPassword;

  const renderEmailDataContent = () => {
    let renderdataContent = null;

    if (isEditMode) {
      renderdataContent = null;
    } else {
      renderdataContent = null;
    }

    return renderdataContent;
  }

  const renderPasswordDataContent = () => {
    let renderdataContent = null;

    if (isEditMode) {
      renderdataContent = null;
    } else {
      renderdataContent = null;
    }

    return renderdataContent;
  }

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.dataContainer}>
        <div style={styles.infoTitle}>{labels.email}</div>
        <div style={styles.infoDesc}>{labels.emailDesc}</div>
        <div style={styles.edit}>{labels.edit}</div>
        {renderEmailDataContent()}
      </div>
      <div style={{
        ...styles.dataContainer,
        ...styles.pwdDataContainer,
      }}>
        <div style={styles.infoTitle}>{labels.password}</div>
        <div style={styles.infoDesc}>{labels.passwordDesc}</div>
        <div style={styles.edit}>{labels.edit}</div>
        {renderPasswordDataContent()}
      </div>
    </div>
  );
}

EmailAndPassword.propTypes = {
  isEditMode: PropTypes.bool,
};

EmailAndPassword.defaultProps = {
  isEditMode: false,
};

export default EmailAndPassword;
