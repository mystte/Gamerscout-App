import React from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import styles from './styles';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import { togglePopup } from '../../../../../redux/actions/app';
import { POPUP_TYPE } from '../../../../../datamanager/models/PopupRecord';

const SigninPopup = () => {
  const labels = Localization.Labels.signinPopup;
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.fieldsContainer}>
        <Input
          placeholder={labels.email}
          icon={'email'}
          type={INPUT_TYPE.EMAIL}
          focus
        />
        <span style={styles.inputSeparator} />
        <Input
          placeholder={labels.password}
          icon={'lock'}
          type={INPUT_TYPE.PASSWORD}
        />
      </div>
      <div style={styles.buttonsContainer}>
        <Button
          label={labels.title}
          theme={BUTTON_THEME.BLUE}
          onClick={() => { }}
        />
        <span style={styles.inputSeparator} />
        <Button
          label={labels.facebook}
          theme={BUTTON_THEME.GREY}
          onClick={() => { }}
        />
        <span style={styles.buttonsSeparator} />
        <Button
          label={labels.createAccount}
          theme={BUTTON_THEME.GREY}
          onClick={() => dispatch(togglePopup(POPUP_TYPE.SIGNUP)) }
        />
      </div>
      <div style={styles.resetPwdContainer}>
        <Button
          label={labels.reset}
          theme={BUTTON_THEME.LINK}
          onClick={() => { }}
        />
      </div>
    </div>
  );
}

SigninPopup.propTypes = {

};

SigninPopup.defaultProps = {
};

export default SigninPopup;
