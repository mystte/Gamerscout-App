import React from 'react';
import { FacebookProvider } from 'react-facebook';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Localization from '../../../config/localization/Localization';
import { doFacebookLogin } from '../../../redux/actions/app';
import Button, { BUTTON_THEME } from '../elements/button/Button';


const FacebookButton = ({
  label,
}) => {
  const appId = useSelector(state => state.app.getIn(['data', 'facebookAppId']));
  const dispatch = useDispatch();

  const onLoginClick = () => {
    window.FB.getLoginStatus(function (response) {
      if (response.status === 'connected') {
        dispatch(doFacebookLogin(response.authResponse.accessToken));
      } else {
        window.FB.login(function (response) {
          dispatch(doFacebookLogin(response.authResponse.accessToken));
        }, { scope: 'email,public_profile' });
      }
    });
  }

  return (
    <FacebookProvider appId={appId}>
      <Button
        label={label}
        theme={BUTTON_THEME.GREY}
        onClick={onLoginClick}
      />
    </FacebookProvider>
  );
}

FacebookButton.propTypes = {
  label: PropTypes.string,
};

FacebookButton.defaultProps = {
  label: Localization.Labels.facebook.title,
};

export default FacebookButton;
