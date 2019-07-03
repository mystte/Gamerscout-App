import React from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';

import styles from './styles';
import { NAV_SECTION } from '../../enums';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';

const EmailAndPassword = ({
  isEditEmailMode,
  isEditPasswordMode,
  onUpdate,
  email,
}) => {
  const labels = Localization.Labels.settings.emailPassword;
  const editEmailLabel = (isEditEmailMode) ? labels.close : labels.edit;
  const editPasswordLabel = (isEditPasswordMode) ? labels.close : labels.edit;
  const maxInputLength = "150";

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
          />
        </div>
        <div style={styles.submitlButtonsContainer}>
            <div style={styles.cancelButtonContainer}>
              <Button
                label={labels.cancel}
                theme={BUTTON_THEME.GREY}
                onClick={() => onUpdate(NAV_SECTION.EMAIL, null)}
              />
            </div>
            <div style={styles.submitButtonContainer}>
              <Button
                label={labels.submit}
                theme={BUTTON_THEME.BLUE}
                onClick={() => {}}
                disabled
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
          />
          <span style={styles.inputSeparator}/>
          <Input
            type={INPUT_TYPE.PASSWORD}
            placeholder={labels.newPassword}
            length={maxInputLength}
          />
        </div>
        <div style={styles.submitlButtonsContainer}>
          <div style={styles.cancelButtonContainer}>
            <Button
              label={labels.cancel}
              theme={BUTTON_THEME.GREY}
              onClick={() => onUpdate(NAV_SECTION.EMAIL, null)}
            />
          </div>
          <div style={styles.submitButtonContainer}>
            <Button
              label={labels.submit}
              theme={BUTTON_THEME.BLUE}
              onClick={() => { }}
              disabled
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
          onClick={() => onUpdate(NAV_SECTION.EMAIL, null)}
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
