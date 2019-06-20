import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
// import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import styles from './styles';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import {
  togglePopup,
  doLogin,
} from '../../../../../redux/actions/app';
import { POPUP_TYPE } from '../../../../../datamanager/models/PopupRecord';
import Validator from '../../../../../datamanager/api/Validator';
import UseKeyPress from '../../../../views/hooks/UseKeyPress';

const SigninPopup = () => {
  const [email, setEmail] = useState('toto@toto.com');
  const [password, setPassword] = useState('tototo');
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const labels = Localization.Labels.signinPopup;
  const errorsLabels = Localization.Errors.signin;
  const dispatch = useDispatch();
  const enterPressed = UseKeyPress('Enter');

  const actionLogin = () => {
    if (email && password) {
      const valid = Validator.doLoginValidator(email, password);
      if (valid === true) {
        dispatch(doLogin(email, password));
      } else {
        setWrongEmail(valid !== true);
        setWrongPassword(valid !== true);
        setErrorMessage(errorsLabels[valid]);
      }
    }
  }

  useEffect(() => {
    return () => {
      if (enterPressed) actionLogin();
    }
  }, [enterPressed])

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.fieldsContainer}>
        <Input
          initValue="toto@toto.com"
          placeholder={labels.email}
          icon={'email'}
          onChange={(e) => setEmail(e.target.value)}
          type={INPUT_TYPE.EMAIL}
          focus
          error={wrongEmail}
        />
        <span style={styles.inputSeparator} />
        <Input
          initValue="tototo"
          placeholder={labels.password}
          onChange={(e) => setPassword(e.target.value)}
          icon={'lock'}
          type={INPUT_TYPE.PASSWORD}
          message={errorMessage}
          error={wrongPassword}
        />
      </div>
      <div style={styles.buttonsContainer}>
        <Button
          label={labels.title}
          theme={BUTTON_THEME.BLUE}
          onClick={actionLogin}
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
          onClick={() => dispatch(togglePopup(POPUP_TYPE.SIGNUP, true)) }
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
