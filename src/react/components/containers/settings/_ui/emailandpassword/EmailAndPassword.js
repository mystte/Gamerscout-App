import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import { NAV_SECTION } from '../../enums';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import Validator from '../../../../../datamanager/api/Validator';
import { clearAppError, doResendValidationEmail } from '../../../../../redux/actions/app';

const EmailAndPassword = ({
  isEditEmailMode,
  isEditPasswordMode,
  onUpdate,
  email,
  isVerified,
  noPassword,
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
  const apiError = useSelector((state) => state.app.get('error'));
  const errorLabels = Localization.Errors.userUpdate;
  const isVerifiedLabel = (isVerified) ? labels.verified : labels.unverified;
  const verifiedLabelStyle = (isVerified)
    ? styles.emailStatusLabel : { ...styles.emailStatusLabel, ...styles.unverified };
  const maxInputLength = '150';

  const getErrorMessage = (localErrorMessage) => {
    let errorMessage = null;

    if (localErrorMessage) errorMessage = localErrorMessage;
    else if (apiError) errorMessage = errorLabels[apiError];

    return errorMessage;
  };

  const hasPwdError = () => pwdErrorMessage !== null || apiError !== null;

  const clearPwdData = () => {
    setCurrentPassword(null);
    setNewPassword(null);
    setNewPasswordConfirm(null);
    setpwdErrorMessage(null);
  };

  const clearEmailData = () => {
    setNewEmail(null);
    setEmailErrorMessage(null);
    setWrongEmail(null);
  };

  const onCancelClick = (section) => {
    onUpdate(section, null);
    clearEmailData();
    clearPwdData();
    dispatch(clearAppError());
  };

  const onPasswordUpdateSubmit = () => {
    const isValid = Validator.doNewPasswordValidator(newPassword, newPasswordConfirm);

    if (isValid === true) {
      onUpdate(NAV_SECTION.PASSWORD, { currentPassword, newPassword });
    } else {
      setpwdErrorMessage(errorLabels[isValid]);
    }
  };

  const onEmailUpdateSubmit = () => {
    if (isVerified || newEmail) {
      const isValid = Validator.doEmailValidator(newEmail);
      if (isValid === true) {
        onUpdate(NAV_SECTION.EMAIL, { email: newEmail });
        clearEmailData();
      } else {
        setEmailErrorMessage(errorLabels[isValid]);
        setWrongEmail(isValid !== true);
      }
    } else {
      dispatch(doResendValidationEmail());
    }
  };

  const getEMailDataContainerStyle = () => (
    ((isEditEmailMode) ? {
      ...styles.dataContainer,
      ...styles.dataContainerEmailEditMode,
    } : {
      ...styles.dataContainer,
    })
  );

  const getPasswordDataContainerStyle = () => (
    ((isEditPasswordMode) ? {
      ...styles.dataContainer,
      ...styles.dataContainerPwdEditMode,
    } : {
      ...styles.dataContainer,
      ...styles.pwdDataContainer,
    })
  );

  const renderEmailValidationButton = () => {
    const label = (isVerified) ? labels.submit : labels.resubmit;

    return (<Button
      label={label}
      theme={BUTTON_THEME.BLUE}
      onClick={onEmailUpdateSubmit}
      disabled={Validator.doUpdateEmailDisableValidator(newEmail, email, isVerified)}
    />);
  };

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
                {renderEmailValidationButton()}
              </div>
          </div>
        </div>);
    }
    return renderDataContent;
  };

  const renderPasswordDataContent = () => {
    let renderdataContent = null;

    if (isEditPasswordMode) {
      renderdataContent = (<div style={styles.inputDataContainer}>
        <div style={styles.inputContainer}>
          {!noPassword
            && <Input
              focus
              type={INPUT_TYPE.PASSWORD}
              placeholder={labels.currentPasswordPlaceholder}
              length={maxInputLength}
              onChange={(e) => {
                setCurrentPassword(e.target.value);
              }}
              error={hasPwdError()}
            />
          }
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
              disabled={(noPassword)
                ? Validator.doCreatePasswordDisabledValidator(
                  newPassword,
                  newPasswordConfirm,
                )
                : Validator.doUpdatePasswordDisabledValidator(
                  currentPassword,
                  newPassword,
                  newPasswordConfirm,
                )}
            />
          </div>
        </div>
      </div>);
    }

    return renderdataContent;
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div className="settings-animation" style={getEMailDataContainerStyle()}>
        <div onClick={() => {
          onUpdate(NAV_SECTION.EMAIL, null); clearEmailData();
        }} style={styles.infosContainer}>
          <div style={styles.infoTitle}>{labels.email}</div>
          <div style={styles.infoDesc}>{labels.emailDesc}</div>
        </div>
        <div
          style={styles.edit}
          onClick={() => (isEditEmailMode
            ? onCancelClick() : onUpdate(NAV_SECTION.EMAIL, null))
          }
        >
          <span style={styles.editEmailLabel}>{editEmailLabel}</span>
          <span style={verifiedLabelStyle}>{isVerifiedLabel}</span>
        </div>
        {renderEmailDataContent()}
      </div>
      <div className="settings-animation" style={getPasswordDataContainerStyle()}>
        <div onClick={() => {
          onUpdate(NAV_SECTION.PASSWORD, null); clearPwdData();
        }} style={styles.infosContainer}>
          <div style={styles.infoTitle}>{labels.password}</div>
          <div style={styles.infoDesc}>{labels.passwordDesc}</div>
        </div>
        <div
          style={styles.edit}
          onClick={() => (isEditPasswordMode
            ? onCancelClick() : onUpdate(NAV_SECTION.PASSWORD, null))
          }
        >
          {editPasswordLabel}
        </div>
        {renderPasswordDataContent()}
      </div>
    </div>
  );
};

EmailAndPassword.propTypes = {
  isEditEmailMode: PropTypes.bool,
  isEditPasswordMode: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
  isVerified: PropTypes.bool.isRequired,
  email: PropTypes.string,
  noPassword: PropTypes.bool,
};

EmailAndPassword.defaultProps = {
  isEditEmailMode: false,
  isEditPasswordMode: false,
  email: null,
  noPassword: false,
};

export default EmailAndPassword;
