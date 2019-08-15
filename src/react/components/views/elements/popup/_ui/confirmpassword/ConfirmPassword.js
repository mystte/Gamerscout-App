import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles';
import Localization from '../../../../../../config/localization/Localization';
import Input, { INPUT_TYPE } from '../../../input/Input';
import Button, { BUTTON_THEME } from '../../../button/Button';
import Validator from '../../../../../../datamanager/api/Validator';
import UseKeyPress from '../../../../hooks/UseKeyPress';
import { doConfirmPassword } from '../../../../../../redux/actions/app';

const ConfirmPassword = () => {
  const dispatch = useDispatch();
  const labels = Localization.Labels.confirmPassword;
  const errorsLabels = Localization.Errors.signin;
  const [password, setPassword] = useState(null);
  const [wrongPassword, setWrongPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);
  const apiError = useSelector((state) => state.app.get('error'));
  const validPwdActionData = useSelector((state) => state.app.getIn(['data', 'popupData', 'params']));
  const enterPressed = UseKeyPress('Enter');

  const onSubmitClick = () => {
    if (password) {
      const valid = Validator.doNewPasswordValidator(password, password);
      if (valid === true) {
        dispatch(doConfirmPassword(password, validPwdActionData));
      } else {
        setWrongPassword(valid !== true);
        setErrorMessage(errorsLabels[valid]);
      }
    }
  };

  useEffect(() => () => {
    if (enterPressed) onSubmitClick();
  }, [enterPressed]);

  return (
    <div style={styles.container}>
      <span style={styles.title}>{labels.title}</span>
      <span style={styles.desc}>{labels.desc}</span>
      <Input
        placeholder={labels.password}
        onChange={(e) => setPassword(e.target.value)}
        icon={'lock'}
        type={INPUT_TYPE.PASSWORD}
        message={(apiError) ? errorsLabels[apiError] : errorMessage}
        error={wrongPassword !== false || apiError !== null}
        focus
      />
      <div style={styles.submit}>
        <Button
          label={labels.submit}
          theme={BUTTON_THEME.BLUE}
          disabled={Validator.doNewPasswordValidator(password, password) !== true}
          onClick={onSubmitClick}
        />
      </div>
    </div>
  );
};

ConfirmPassword.propTypes = {
};

ConfirmPassword.defaultProps = {
};

export default ConfirmPassword;
