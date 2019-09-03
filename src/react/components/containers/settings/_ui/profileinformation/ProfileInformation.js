import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import { NAV_SECTION } from '../../enums';
import Input from '../../../../views/elements/input/Input';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import Validator from '../../../../../datamanager/api/Validator';

const ProfileInformation = ({
  isEditMode,
  username,
  onUpdate,
}) => {
  const labels = Localization.Labels.settings.profile;
  const errors = Localization.Errors.userUpdate;
  const editLabel = (isEditMode) ? labels.close : labels.edit;
  const [usernameError, setUsernameError] = useState(null);
  const [gsId, setGsId] = useState(null);
  const maxInputLength = '50';

  const clearErrors = () => {
    setUsernameError(null);
  };

  const getDataContainerStyle = () => (
    (isEditMode) ? {
      ...styles.dataContainer,
      ...styles.dataContainerEditMode,
    } : {
      ...styles.dataContainer,
    }
  );

  const onProfileSubmit = () => {
    const valid = Validator.doUsernameValidator(gsId);
    clearErrors();
    setGsId(null);

    if (valid === true) {
      onUpdate(NAV_SECTION.PROFILE, { username: gsId });
    } else setUsernameError(valid);
  };

  const onCancelClick = (section) => {
    onUpdate(section, null);
  };

  const updateGsId = (newId) => {
    clearErrors();
    setGsId(newId);
  };

  const renderDataContent = () => {
    let renderDataContentView = null;

    if (isEditMode) {
      renderDataContentView = (<div style={styles.inputDataContainer}>
        <div style={styles.inputContainer}>
          <Input
            focus
            placeholder={username}
            length={maxInputLength}
            value={gsId}
            onChange={(e) => updateGsId(e.target.value)}
            error={usernameError !== true && usernameError !== null}
            message={errors[usernameError]}
          />
        </div>
        <div style={styles.submitlButtonsContainer}>
          <div style={styles.cancelButtonContainer}>
            <Button
              label={labels.cancel}
              theme={BUTTON_THEME.GREY}
              onClick={() => onCancelClick(NAV_SECTION.PROFILE)}
            />
          </div>
          <div style={styles.cancelButtonContainer}>
            <Button
              label={labels.submit}
              theme={BUTTON_THEME.BLUE}
              onClick={onProfileSubmit}
              disabled={Validator.doUpdateGamerscoutIdDisableValidator(gsId)}
            />
          </div>
        </div>
      </div>);
    }
    return renderDataContentView;
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div className="settings-animation" style={getDataContainerStyle()}>
        <div style={styles.topContainer} onClick={() => onUpdate(NAV_SECTION.PROFILE, null)}>
          <div style={styles.infoTitle}>{labels.info}</div>
          <div style={styles.infoDesc}>{labels.desc}</div>
          <div style={styles.edit}>
            {editLabel}
          </div>
        </div>
        {renderDataContent()}
      </div>
    </div>
  );
};

ProfileInformation.propTypes = {
  isEditMode: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
  username: PropTypes.string,
};

ProfileInformation.defaultProps = {
  isEditMode: false,
  username: null,
};

export default ProfileInformation;
