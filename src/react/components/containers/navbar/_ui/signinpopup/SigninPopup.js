import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Localization from '../../../../../config/localization/Localization';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import styles from './styles';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import { togglePopup, doLogin } from '../../../../../redux/actions/app';
import { POPUP_TYPE } from '../../../../../datamanager/models/PopupRecord';
import Validator from '../../../../../datamanager/api/Validator';
import UseKeyPress from '../../../../views/hooks/UseKeyPress';
import FacebookButton from '../../../../views/facebookbutton/FacebookButton';

const SigninPopup = () => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const labels = Localization.Labels.signinPopup;
  const errorsLabels = Localization.Errors.signin;
  const apiError = useSelector(state => state.app.get('error'));
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
  };

  useEffect(
    () => () => {
      if (enterPressed) actionLogin();
    },
    [enterPressed]
  );

  useEffect(
    () => () => {
      setWrongEmail(true);
      setWrongPassword(true);
    },
    [apiError]
  );

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.fieldsContainer}>
        <Input
          placeholder={labels.email}
          icon={'email'}
          onChange={e => setEmail(e.target.value)}
          type={INPUT_TYPE.EMAIL}
          focus
          error={wrongEmail}
        />
        <span style={styles.inputSeparator} />
        <Input
          placeholder={labels.password}
          onChange={e => setPassword(e.target.value)}
          icon={'lock'}
          type={INPUT_TYPE.PASSWORD}
          message={apiError ? errorsLabels[apiError] : errorMessage}
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
        <FacebookButton label={labels.facebook} />
        <span style={styles.buttonsSeparator} />
        <Button
          label={labels.createAccount}
          theme={BUTTON_THEME.GREY}
          onClick={() => dispatch(togglePopup(POPUP_TYPE.SIGNUP, true))}
        />
      </div>
      <div style={styles.resetPwdContainer}>
        <Button
          label={labels.reset}
          theme={BUTTON_THEME.LINK}
          onClick={() => dispatch(togglePopup(POPUP_TYPE.FORGET_PWD, true))}
        />
      </div>
    </div>
  );
};

export default SigninPopup;
