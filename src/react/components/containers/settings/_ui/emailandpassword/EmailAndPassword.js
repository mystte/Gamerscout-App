import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import { NAV_SECTION } from '../../enums';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import Validator from '../../../../../datamanager/api/Validator';
import { clearAppError } from '../../../../../redux/actions/app';

const EmailAndPassword = ({
  isEditEmailMode,
  isEditPasswordMode,
  onUpdate,
  email,
}) => {
  const dispatch = useDispatch();
  const labels = Localization.Labels.settings.emailPassword;
  const editEmailLabel = (isEditEmailMode) ? labels.close : labels.edit;
  const editPasswordLabel = (isEditPasswordMode) ? labels.close : labels.edit;
  const [newEmail, setNewEmail] = useState(null);
  const [currentPassword, setCurrentPassword] = useState(null);
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
      onUpdate(NAV_SECTION.PASSWORD, { currentPassword, newPassword });
    } else {
      setpwdErrorMessage(errorLabels[isValid]);
    }
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

  const hasPwdError = () => {
    return pwdErrorMessage !== null || apiError !== null;
  }

  const clearPwdData = () => {
    setCurrentPassword(null);
    setNewPassword(null);
    setNewPasswordConfirm(null);
    setpwdErrorMessage(null);
  }

  const clearEmailData = () => {
    setNewEmail(null);
    setEmailErrorMessage(null);
    setWrongEmail(null);
  }

  const onCancelClick = (section) => {
    onUpdate(section, null);
    clearEmailData();
    clearPwdData();
    dispatch(clearAppError());
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
            placeholder={labels.currentPasswordPlaceholder}
            length={maxInputLength}
            onChange={(e) => {
              setCurrentPassword(e.target.value);
            }}
            error={hasPwdError()}
          />
          <span style={styles.inputSeparator} />
          <Input
            type={INPUT_TYPE.PASSWORD}
            placeholder={labels.newPassword}
            length={maxInputLength}
            onChange={(e) => {
              setNewPassword(e.target.value);
            }}
            error={hasPwdError()}
          />
          <span style={styles.inputSeparator}/>
          <Input
            type={INPUT_TYPE.PASSWORD}
            placeholder={labels.newPassword}
            length={maxInputLength}
            onChange={(e) => {
              setNewPasswordConfirm(e.target.value);
            }}
            error={hasPwdError()}
            message={getErrorMessage(pwdErrorMessage)}
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
              label={labels.save}
              theme={BUTTON_THEME.BLUE}
              onClick={onPasswordUpdateSubmit}
              disabled={Validator.doUpdatePasswordDisabledValidator(currentPassword, newPassword, newPasswordConfirm)}
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
        <div onClick={() => { onUpdate(NAV_SECTION.EMAIL, null); clearEmailData(); }} style={styles.infosContainer}>
          <div style={styles.infoTitle}>{labels.email}</div>
          <div style={styles.infoDesc}>{labels.emailDesc}</div>
        </div>
        <div
          style={styles.edit}
          onClick={() => isEditEmailMode ? onCancelClick() : onUpdate(NAV_SECTION.EMAIL, null)}
        >
          {editEmailLabel}
        </div>
        {renderEmailDataContent()}
      </div>
      <div className="settings-animation" style={getPasswordDataContainerStyle()}>
        <div onClick={() => { onUpdate(NAV_SECTION.PASSWORD, null); clearPwdData(); }} style={styles.infosContainer}>
          <div style={styles.infoTitle}>{labels.password}</div>
          <div style={styles.infoDesc}>{labels.passwordDesc}</div>
        </div>
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
