import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Localization from '../../../config/localization/Localization';
import styles from './styles';
import SettingsNav from './_ui/settingsnav/SettingsNav';
import { NAV_SECTION } from './enums';
import ProfileInformation from './_ui/profileinformation/ProfileInformation';
import EmailAndPassword from './_ui/emailandpassword/EmailAndPassword';
import ConnectedAccounts from './_ui/connectedaccounts/ConnectedAccounts';
import {
  clearAppError,
  doUpdatePassword,
  togglePopup,
  doCreatePassword,
} from '../../../redux/actions/app';
import { POPUP_TYPE } from '../../../datamanager/models/PopupRecord';
import { APP, loading } from '../../../redux/actions/actionTypes';
import {
  MOCKED_NOTIFICATION,
  NOTIFICATION_TYPE,
} from '../../../datamanager/models/NotificationRecord';
import { pushNotification } from '../../../redux/actions/notifications';
import UseMediaQueries from '../../views/hooks/UseMediaQueries';

const Settings = () => {
  const labels = Localization.Labels.settings;
  const { getResponsiveStyle } = UseMediaQueries();
  const notifLabels = Localization.Labels.notifications;
  const [selectedNav, setSelectedNav] = useState(NAV_SECTION.PROFILE);
  const [editingSection, setEditingSection] = useState(null);
  const connectedUser = useSelector(state => state.app.getIn(['data', 'user']));
  const dispatch = useDispatch();

  if (!connectedUser) return null;

  const sendPasswordUpdateNotification = () => {
    dispatch(
      pushNotification({
        title: notifLabels.updatePasswordRequired.title,
        type: NOTIFICATION_TYPE.ALERT,
      })
    );
  };

  const onSettingsUpdate = (type, data) => {
    if (data) {
      if (type === NAV_SECTION.EMAIL) {
        if (connectedUser.hasAutomaticGeneratedPwd)
          sendPasswordUpdateNotification();
        else {
          const params = {
            onValidAction: loading(APP.DO_UPDATE_USER),
            onSuccessNotif: MOCKED_NOTIFICATION.VALIDATION_EMAIL_RESENT,
            data: {
              email: data.email,
              id: connectedUser.id,
            },
          };
          if (connectedUser.hasAutomaticGeneratedPwd) {
            sendPasswordUpdateNotification();
          } else {
            dispatch(togglePopup(POPUP_TYPE.CONFIRM_PWD, true, params));
          }
        }
      } else if (type === NAV_SECTION.PROFILE) {
        dispatch(
          togglePopup(POPUP_TYPE.CONFIRM_PWD, true, {
            onSuccessNotif: MOCKED_NOTIFICATION.UPATED_PROFILE,
            onValidAction: loading(APP.DO_UPDATE_USER),
            data: {
              id: connectedUser.id,
              username: data.username,
            },
          })
        );
      } else if (type === NAV_SECTION.PASSWORD) {
        if (connectedUser.hasAutomaticGeneratedPwd) {
          dispatch(
            doCreatePassword({
              userId: connectedUser.id,
              newPassword: data.newPassword,
            })
          );
        } else {
          dispatch(
            doUpdatePassword({
              userId: connectedUser.id,
              currentPassword: data.currentPassword,
              newPassword: data.newPassword,
            })
          );
        }
      } else if (type === NAV_SECTION.ACCOUNTS) {
        if (connectedUser.hasAutomaticGeneratedPwd)
          sendPasswordUpdateNotification();
        else {
          dispatch(
            togglePopup(POPUP_TYPE.CONFIRM_PWD, true, {
              onValidAction: loading(APP.DO_DISCONNECT_FACEBOOK),
            })
          );
        }
      }
    } else if (editingSection === type) {
      dispatch(clearAppError());
      setEditingSection(null);
    } else {
      dispatch(clearAppError());
      setEditingSection(type);
      setSelectedNav(type === NAV_SECTION.PASSWORD ? NAV_SECTION.EMAIL : type);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles[getResponsiveStyle('title')]}>{labels.title}</div>
      <div style={styles[getResponsiveStyle('contentContainer')]}>
        <SettingsNav
          selectedNav={selectedNav}
          onNavSelect={section => onSettingsUpdate(section)}
        />
        <div style={styles[getResponsiveStyle('settingsDataContainer')]}>
          <ProfileInformation
            onUpdate={onSettingsUpdate}
            username={connectedUser.username}
            isEditMode={editingSection === NAV_SECTION.PROFILE}
          />
          <EmailAndPassword
            onUpdate={onSettingsUpdate}
            isEditEmailMode={editingSection === NAV_SECTION.EMAIL}
            isEditPasswordMode={editingSection === NAV_SECTION.PASSWORD}
            email={connectedUser.email}
            isVerified={connectedUser.validated}
            noPassword={connectedUser.hasAutomaticGeneratedPwd}
          />
          <ConnectedAccounts
            onUpdate={onSettingsUpdate}
            isEditMode={editingSection === NAV_SECTION.ACCOUNTS}
          />
        </div>
      </div>
    </div>
  );
};

export default Settings;
