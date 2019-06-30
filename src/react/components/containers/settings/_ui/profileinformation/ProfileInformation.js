import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';

import styles from './styles';

const ProfileInformation = ({
  isEditMode,
}) => {
  const labels = Localization.Labels.settings.profile;

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
        <div style={styles.infoTitle}>{labels.info}</div>
        <div style={styles.infoDesc}>{labels.desc}</div>
        <div style={styles.edit}>{labels.edit}</div>
        {renderDataContent()}
      </div>
    </div>
  );
}

ProfileInformation.propTypes = {
  isEditMode: PropTypes.bool,
};

ProfileInformation.defaultProps = {
  isEditMode: false,
};

export default ProfileInformation;
