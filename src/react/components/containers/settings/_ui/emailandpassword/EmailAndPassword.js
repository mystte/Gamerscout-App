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
  const [pwdErrorMessage, setpwdErrorMessage] = useState(null);
  const apiError = useSelector(state => state.app.get('error'));
  const errorLabels = Localization.Errors.userUpdate;
  const maxInputLength = "150";

  const onPasswordUpdateSubmit = () => {
    const isValid = Validator.doNewPasswordValidator(newPassword, newPasswordConfirm);

    if (isValid === true) {
      console.log("##### PASSWORD VALID");
    } else {
      setpwdErrorMessage(errorLabels[isValid]);
    }
    console.log(isValid);
  }

  const onEmailUpdateSubmit = () => {
    const isValid = Validator.doEmailValidator(newEmail);
    if (isValid === true) {
      onUpdate(NAV_SECTION.EMAIL, { email: newEmail });
    } else {
      setEmailErrorMessage(errorLabels[isValid]);
      setWrongEmail(isValid !== true);
    }
  }

  const getErrorMessage = (localErrorMessage) => {
    let errorMessage = null;

    if (localErrorMessage) errorMessage = localErrorMessage;
    else if (apiError) errorMessage = errorLabels[apiError];
    return errorMessage;
  }

  const onCancelClick = (section) => {
    onUpdate(section, null);
    setNewEmail(null);
    setNewPassword(null);
    setEmailErrorMessage(null);
    setpwdErrorMessage(null),
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
              message={getErrorMessage(emailErrorMessage)}
              error={wrongEmail || apiError}
            />
          </div>
          <div style={styles.submitlButtonsContainer}>
              <div style={styles.cancelButtonContainer}>
                <Button
                  label={labels.cancel}
                  theme={BUTTON_THEME.GREY}
                  onClick={() => onCancelClick(NAV_SECTION.EMAIL)}
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
            error={pwdErrorMessage !== null}
          />
          <span style={styles.inputSeparator}/>
          <Input
            type={INPUT_TYPE.PASSWORD}
            placeholder={labels.newPassword}
            length={maxInputLength}
            onChange={(e) => {
              setNewPasswordConfirm(e.target.value);
            }}
            error={pwdErrorMessage !== null}
            message={pwdErrorMessage}
          />
        </div>
        <div style={styles.submitlButtonsContainer}>
          <div style={styles.cancelButtonContainer}>
            <Button
              label={labels.cancel}
              theme={BUTTON_THEME.GREY}
              onClick={() => onCancelClick(NAV_SECTION.PASSWORD)}
            />
          </div>
          <div style={styles.submitButtonContainer}>
            <Button
              label={labels.submit}
              theme={BUTTON_THEME.BLUE}
              onClick={onPasswordUpdateSubmit}
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
      <div className="settings-animation" style={getEMailDataContainerStyle()}>
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
      <div className="settings-animation" style={getPasswordDataContainerStyle()}>
        <div style={styles.infoTitle}>{labels.password}</div>
        <div style={styles.infoDesc}>{labels.passwordDesc}</div>
        <div
          style={styles.edit}
          onClick={() => isEditPasswordMode ? onCancelClick() : onUpdate(NAV_SECTION.PASSWORD, null)}
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
