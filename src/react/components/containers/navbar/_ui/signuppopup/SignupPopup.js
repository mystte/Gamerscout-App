import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import Input, { INPUT_TYPE } from '../../../../views/elements/input/Input';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import { togglePopup } from '../../../../../redux/actions/app';
import { POPUP_TYPE } from '../../../../../datamanager/models/PopupRecord';

const SigninPopup = () => {
  const labels = Localization.Labels.signupPopup;
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div style={styles.fieldsContainer}>
        <Input
          placeholder={labels.username}
          icon={'user-icon'}
          type={INPUT_TYPE.TEXT}
          focus
        />
        <span style={styles.inputSeparator} />
        <Input
          placeholder={labels.email}
          icon={'email'}
          type={INPUT_TYPE.EMAIL}
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

SigninPopup.propTypes = {

};

SigninPopup.defaultProps = {
};

export default SigninPopup;
