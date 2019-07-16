import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import { NAV_SECTION } from '../../enums';

const ProfileInformation = ({
  isEditMode,
  onUpdate,
}) => {
  const labels = Localization.Labels.settings.profile;
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
      renderDataContent = ("editcontent");
    }
    return renderDataContent;
  }

  return (
    <div onClick={() => onUpdate(NAV_SECTION.PROFILE, null)} style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div className="settings-animation" style={getDataContainerStyle()}>
        <div style={styles.infoTitle}>{labels.info}</div>
        <div style={styles.infoDesc}>{labels.desc}</div>
        <div style={styles.edit}>
          {editLabel}
        </div>
        {renderDataContent()}
      </div>
    </div>
  );
}

ProfileInformation.propTypes = {
  isEditMode: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

ProfileInformation.defaultProps = {
  isEditMode: false,
};

export default ProfileInformation;
