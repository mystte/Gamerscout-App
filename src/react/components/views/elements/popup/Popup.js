import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Button, { BUTTON_THEME } from '../button/Button';
import UseKeyPress from '../../hooks/UseKeyPress';
import SigninPopup from '../../../containers/navbar/_ui/signinpopup/SigninPopup';
import SignupPopup from '../../../containers/navbar/_ui/signuppopup/SignupPopup';
import ForgetPasswordPopup from '../../../containers/navbar/_ui/forgetpasswordpopup/ForgetPasswordPopup';
import { POPUP_TYPE } from '../../../../datamanager/models/PopupRecord';
import ConfirmPassword from './_ui/confirmpassword/ConfirmPassword';
import AttributesPopup from '../../../containers/gamerdetails/_ui/reviewstab/_ui/reviewsection/_ui/attributespopup/AttributesPopup';

const Popup = ({
  togglePopup,
  show,
  type,
}) => {
  const escapePressed = UseKeyPress('Escape');

  const renderedContent = () => {
    let result = null;
    if (type === POPUP_TYPE.SIGNIN) {
      result = <SigninPopup />;
    } else if (type === POPUP_TYPE.SIGNUP) {
      result = <SignupPopup />;
    } else if (type === POPUP_TYPE.FORGET_PWD) {
      result = <ForgetPasswordPopup />;
    } else if (type === POPUP_TYPE.CONFIRM_PWD) {
      result = <ConfirmPassword />;
    } else if (type === POPUP_TYPE.ATTRIBUTES_LIST) {
      result = <AttributesPopup />;
    }
    return result;
  };

  useEffect(() => (
    () => {
      if (escapePressed && show) togglePopup();
    }
  ), [escapePressed]);

  return (
    <React.Fragment>
      {show
        && <div style={styles.popupBackground}>
          <div
            style={styles.container}
          >
            <div style={styles.closeContainer}>
              <Button
                icon="close"
                onClick={togglePopup}
                theme={BUTTON_THEME.SIMPLE}
              />
            </div>
            {renderedContent()}
          </div>
        </div>
      }
    </React.Fragment>
  );
};

Popup.propTypes = {
  togglePopup: PropTypes.func.isRequired,
  show: PropTypes.bool,
  viewContent: PropTypes.object,
  type: PropTypes.string,
};

Popup.defaultProps = {
  show: false,
  viewContent: null,
  type: null,
};

export default Popup;
