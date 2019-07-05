import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import { NAV_SECTION } from '../../enums';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import Validator from '../../../../../datamanager/api/Validator';

const EmailAndPassword = ({
  isEditEmailMode,
  isEditPasswordMode,
  onUpdate,
  email,
}) => {
  const labels = Localization.Labels.settings.emailPassword;
  const editEmailLabel = (isEditEmailMode) ? labels.close : labels.edit;
  const editPasswordLabel = (isEditPasswordMode) ? labels.close : labels.edit;
  const [newEmail, setNewEmail] = useState(null);
  const [newPassword, setNewPassword] = useState(null);
  const [newPasswordConfirm, setNewPasswordConfirm] = useState(null);
  const [wrongEmail, setWrongEmail] = useState(null);
  const [emailErrorMessage, setEmailErrorMessage] = useState(null);
  const apiError = useSelector(state => state.app.get('error'));
  const errorLabels = Localization.Errors.userUpdate;
  const maxInputLength = "150";

  const onEmailUpdateSubmit = () => {
    const isValid = Validator.doEmailValidator(newEmail);
    if (isValid === true) {
      onUpdate(NAV_SECTION.EMAIL, { email: newEmail });
    } else {
      setEmailErrorMessage(errorLabels[isValid]);
      setWrongEmail(isValid !== true);
    }
  }

  const getEmailErrorMessage = () => {
    let errorMessage = null;

    if (emailErrorMessage) errorMessage = emailErrorMessage;
    else if (apiError) errorMessage = errorLabels[apiError];
    return errorMessage;
  }

  const onCancelClick = () => {
    onUpdate(NAV_SECTION.EMAIL, null);
    setNewEmail(null);
    setNewPassword(null);
    setEmailErrorMessage(null);
    setWrongEmail(null);
  }

  const getEMailDataContainerStyle = () => {
    return (isEditEmailMode) ? {
      ...styles.dataContainer,
      ...styles.dataContainerEmailEditMode,
    } : {
      ...styles.dataContainer,
    };
  }

  const getPasswordDataContainerStyle = () => {
    return (isEditPasswordMode) ? {
      ...styles.dataContainer,
      ...styles.dataContainerPwdEditMode,
    } : {
      ...styles.dataContainer,
      ...styles.pwdDataContainer,
    };
  }

  const renderEmailDataContent = () => {
    let renderDataContent = null;

    if (isEditEmailMode) {
      renderDataContent = (
      <div style={styles.inputDataContainer}>
        <div style={styles.inputContainer}>
          <Input
            focus
            placeholder={email}
            length={maxInputLength}
            onChange={(e) => setNewEmail(e.target.value)}
            message={getEmailErrorMessage()}
            error={wrongEmail || apiError}
          />
        </div>
        <div style={styles.submitlButtonsContainer}>
            <div style={styles.cancelButtonContainer}>
              <Button
                label={labels.cancel}
                theme={BUTTON_THEME.GREY}
                onClick={onCancelClick}
              />
            </div>
            <div style={styles.submitButtonContainer}>
              <Button
                label={labels.submit}
                theme={BUTTON_THEME.BLUE}
                onClick={onEmailUpdateSubmit}
                disabled={Validator.doUpdateEmailDisabledValidator(newEmail, email)}
              />
            </div>
        </div>
      </div>);
    }
    return renderDataContent;
  }

  const renderPasswordDataContent = () => {
    let renderdataContent = null;

    if (isEditPasswordMode) {
      renderdataContent = (<div style={styles.inputDataContainer}>
        <div style={styles.inputContainer}>
          <Input
            focus
            type={INPUT_TYPE.PASSWORD}
            placeholder={labels.newPassword}
            length={maxInputLength}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
          />
          <span style={styles.inputSeparator}/>
          <Input
            type={INPUT_TYPE.PASSWORD}
            placeholder={labels.newPassword}
            length={maxInputLength}
            onChange={(e) => {
              setNewPasswordConfirm(e.target.value);
            }}
          />
        </div>
        <div style={styles.submitlButtonsContainer}>
          <div style={styles.cancelButtonContainer}>
            <Button
              label={labels.cancel}
              theme={BUTTON_THEME.GREY}
              onClick={onCancelClick}
            />
          </div>
          <div style={styles.submitButtonContainer}>
            <Button
              label={labels.submit}
              theme={BUTTON_THEME.BLUE}
              onClick={() => { }}
              disabled={Validator.doUpdatePasswordDisabledValidator(newPassword, newPasswordConfirm)}
            />
          </div>
        </div>
      </div>);
    }

    return renderdataContent;
  }

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={getEMailDataContainerStyle()}>
        <div style={styles.infoTitle}>{labels.email}</div>
        <div style={styles.infoDesc}>{labels.emailDesc}</div>
        <div
          style={styles.edit}
          onClick={() => isEditEmailMode ? onCancelClick() : onUpdate(NAV_SECTION.EMAIL, null)}
        >
          {editEmailLabel}
        </div>
        {renderEmailDataContent()}
      </div>
      <div style={getPasswordDataContainerStyle()}>
        <div style={styles.infoTitle}>{labels.password}</div>
        <div style={styles.infoDesc}>{labels.passwordDesc}</div>
        <div
          style={styles.edit}
          onClick={() => onUpdate(NAV_SECTION.PASSWORD, null)}
        >
          {editPasswordLabel}
        </div>
        {renderPasswordDataContent()}
      </div>
    </div>
  );
}

EmailAndPassword.propTypes = {
  isEditEmailMode: PropTypes.bool,
  isEditPasswordMode: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
  email: PropTypes.string,
};

EmailAndPassword.defaultProps = {
  isEditEmailMode: false,
  isEditPasswordMode: false,
  email: null,
};

export default EmailAndPassword;
