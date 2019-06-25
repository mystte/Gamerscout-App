import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import {
  togglePopup,
  doSignup,
} from '../../../../../redux/actions/app';
import { POPUP_TYPE } from '../../../../../datamanager/models/PopupRecord';
import Validator from '../../../../../datamanager/api/Validator';
import UseKeyPress from '../../../../views/hooks/UseKeyPress';

const SigninPopup = () => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [wrongUsername, setWrongUsername] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const labels = Localization.Labels.signupPopup;
  const errorLabels = Localization.Errors.signup;
  const apiError = useSelector(state => state.app.get('error'));
  const dispatch = useDispatch();
  const enterPressed = UseKeyPress('Enter');

  const resetErrors = () => {
    setWrongUsername(false);
    setWrongEmail(false);
    setWrongPassword(false);
    setErrorMessage(null);
  }

  const createAccount = () => {
    const valid = Validator.doSignupValidator(username, email, password);

    if (valid === true) {
      resetErrors();
      dispatch(doSignup(username, email, password));
    } else {
      setWrongUsername(valid.indexOf('Username') !== -1);
      setWrongEmail(valid.indexOf('Email') !== -1);
      setWrongPassword(valid.indexOf('Password') !== -1);
      setErrorMessage(errorLabels[valid]);
    }
  }

  useEffect(() => {
    return () => {
      setWrongUsername(true);
      setWrongEmail(true);
    }
  }, [apiError]);

  useEffect(() => {
    return () => {
      if (enterPressed) createAccount();
    }
  }, [enterPressed]);

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.fieldsContainer}>
        <Input
          onChange={(e) => setUsername(e.target.value)}
          placeholder={labels.username}
          icon={'user-icon'}
          type={INPUT_TYPE.TEXT}
          error={wrongUsername}
          focus
        />
        <span style={styles.inputSeparator} />
        <Input
          onChange={(e) => setEmail(e.target.value)}
          placeholder={labels.email}
          icon={'email'}
          type={INPUT_TYPE.EMAIL}
          error={wrongEmail}
        />
        <span style={styles.inputSeparator} />
        <Input
          onChange={(e) => setPassword(e.target.value)}
          placeholder={labels.password}
          icon={'lock'}
          type={INPUT_TYPE.PASSWORD}
          message={(apiError) ? errorLabels[apiError] : errorMessage}
          error={wrongPassword}
        />
      </div>
      <div style={styles.buttonsContainer}>
        <Button
          label={labels.title}
          theme={BUTTON_THEME.BLUE}
          onClick={createAccount}
        />
        <span style={styles.inputSeparator} />
        <Button
          label={labels.facebook}
          theme={BUTTON_THEME.GREY}
          onClick={() => { }}
        />
      </div>
      <div style={styles.aggreementContainer}>
        {Localization.Labels.formatString(
            labels.agreement,
            <span style={styles.agreementButton}>
              {labels.terms}
            </span>,
            <span style={styles.agreementButton}>
              {labels.policy}
            </span>
          )
        }
      </div>
      <div style={styles.signinContainer}>
        {labels.haveAccount}
        <span
          style={styles.signin}
          onClick={() => dispatch(togglePopup(POPUP_TYPE.SIGNIN, true))}
        >
          {labels.signin}
        </span>
      </div>
    </div>
  );
}

export default SigninPopup;
