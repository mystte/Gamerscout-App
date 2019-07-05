import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';

import styles from './styles';
import { NAV_SECTION } from '../../enums';

const ConnectedAccounts = ({
  isEditMode,
  onUpdate,
}) => {
  const labels = Localization.Labels.settings.accounts;
  const editLabel = (isEditMode) ? labels.close : labels.edit;

  const getDataContainerStyle = () => {
    return (isEditMode) ? {
      ...styles.dataContainer,
      ...styles.dataContainerEditMode,
    } : {
        ...styles.dataContainer,
      };
  }

  const renderDataContent = () => {
    let renderDataContent = null;

    if (isEditMode) {
      renderDataContent = ("Connected");
    }

    return renderDataContent;
  }

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div className="settings-animation" style={getDataContainerStyle()}>
        <div style={styles.infoTitle}>{labels.facebook}</div>
        <div style={styles.infoDesc}>{labels.facebookDesc}</div>
        <div
          style={styles.edit}
          onClick={() => onUpdate(NAV_SECTION.ACCOUNTS, null)}
        >
          {editLabel}
        </div>
        {renderDataContent()}
      </div>
    </div>
  );
}

ConnectedAccounts.propTypes = {
  isEditMode: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

ConnectedAccounts.defaultProps = {
  isEditMode: false,
};

export default ConnectedAccounts;
