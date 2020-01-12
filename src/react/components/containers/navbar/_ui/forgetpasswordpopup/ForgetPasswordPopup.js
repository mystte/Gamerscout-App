import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Localization from '../../../../../config/localization/Localization';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import styles from './styles';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import { togglePopup, doResetPassword } from '../../../../../redux/actions/app';
import { POPUP_TYPE } from '../../../../../datamanager/models/PopupRecord';
import UseKeyPress from '../../../../views/hooks/UseKeyPress';
import Validator from '../../../../../datamanager/api/Validator';

const ForgetPasswordPopup = () => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState(null);
  const [resetDone] = useState(false);
  const [wrongEmail, setWrongEmail] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const labels = Localization.Labels.forgetPasswordPopup;
  const errorsLabels = Localization.Errors.resetPassword;
  const apiError = useSelector(state => state.app.get('error'));
  const enterPressed = UseKeyPress('Enter');

  const onSubmit = () => {
    const valid = Validator.doResetPasswordValidator(email);

    if (valid === true) {
      dispatch(doResetPassword(email));
      dispatch(togglePopup());
    } else {
      setWrongEmail(true);
      setErrorMessage(errorsLabels[valid]);
    }
  };

  useEffect(
    () => () => {
      if (enterPressed) onSubmit();
    },
    [enterPressed]
  );

  useEffect(
    () => () => {
      setWrongEmail(true);
    },
    [apiError]
  );

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      {resetDone && <div>Sent</div>}
      {!resetDone && (
        <React.Fragment>
          <div style={styles.desc}>{labels.desc}</div>
          <div style={styles.fieldsContainer}>
            <Input
              placeholder={labels.placeholder}
              icon={'email'}
              onChange={e => setEmail(e.target.value)}
              type={INPUT_TYPE.EMAIL}
              focus
              error={wrongEmail}
              message={errorMessage}
            />
          </div>
          <div style={styles.buttonsContainer}>
            <Button
              label={labels.title}
              theme={BUTTON_THEME.BLUE}
              onClick={onSubmit}
            />
          </div>
          <div style={styles.backContainer}>
            <Button
              label={labels.back}
              theme={BUTTON_THEME.LINK}
              onClick={() => dispatch(togglePopup(POPUP_TYPE.SIGNIN, true))}
            />
          </div>
        </React.Fragment>
      )}
    </div>
  );
};

export default ForgetPasswordPopup;
