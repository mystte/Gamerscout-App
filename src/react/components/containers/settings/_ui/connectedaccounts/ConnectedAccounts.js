import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';

import styles from './styles';

const ConnectedAccounts = ({
  isEditMode,
}) => {
  const labels = Localization.Labels.settings.accounts;

  const renderDataContent = () => {
    let renderDataContent = null;

    if (isEditMode) {
      renderDataContent = null;
    } else {
      renderDataContent = null;
    }

    return renderDataContent;
  }

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.dataContainer}>
        <div style={styles.infoTitle}>{labels.facebook}</div>
        <div style={styles.infoDesc}>{labels.facebookDesc}</div>
        <div style={styles.edit}>{labels.edit}</div>
        {renderDataContent()}
      </div>
    </div>
  );
}

ConnectedAccounts.propTypes = {
  isEditMode: PropTypes.bool,
};

ConnectedAccounts.defaultProps = {
  isEditMode: false,
};

export default ConnectedAccounts;
