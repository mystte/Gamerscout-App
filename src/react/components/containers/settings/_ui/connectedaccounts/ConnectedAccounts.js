import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import Localization from '../../../../../config/localization/Localization';

import styles from './styles';
import { NAV_SECTION } from '../../enums';
import Checkbox from '../../../../views/elements/checkbox/Checkbox';
import SVGIcon from '../../../../views/elements/svgicon/SVGIcon';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import { togglePopup } from '../../../../../redux/actions/app';
import { POPUP_TYPE } from '../../../../../datamanager/models/PopupRecord';
import { APP } from '../../../../../redux/actions/actionTypes';

const ConnectedAccounts = ({
  isEditMode,
  onUpdate,
}) => {
  const dispatch = useDispatch();
  const [accountSelected, setAccountSelected] = useState(false);
  const labels = Localization.Labels.settings.accounts;
  const editLabel = (isEditMode) ? labels.close : labels.edit;
  const connectedUser = useSelector((state) => state.app.getIn(['data', 'user']));

  const getDataContainerStyle = () => (
    (isEditMode) ? {
      ...styles.dataContainer,
      ...styles.dataContainerEditMode,
    } : {
      ...styles.dataContainer,
    }
  );

  const onAccountCheckboxClick = (value) => {
    setAccountSelected(value);
  };

  const onCancelClick = (section) => {
    onUpdate(section, null);
  };

  const renderDataContent = () => {
    let renderDataContentView = null;

    if (isEditMode) {
      renderDataContentView = (
        <div style={styles.detailsContainer}>
          {connectedUser.facebookId
            && <div style={styles.emailContainer}>
              <Checkbox
                label={connectedUser.facebookEmail}
                onChange={onAccountCheckboxClick}
              />
            </div>
          }
          {!connectedUser.facebookId
            && <div style={styles.addAccountContainer}>
              <SVGIcon width={20} height={20} name={'add-box'} />
              <span style={styles.addLabel}>{labels.add}</span>
            </div>
          }
          <div style={styles.submitlButtonsContainer}>
              <div style={styles.cancelButtonContainer}>
                <Button
                  label={labels.cancel}
                  theme={BUTTON_THEME.GREY}
                  onClick={() => onCancelClick(NAV_SECTION.EMAIL)}
                />
              </div>
            <div style={styles.submitButtonContainer}>
              <Button
                label={labels.disconnect}
                theme={BUTTON_THEME.BLUE}
                disabled={accountSelected === false}
                onClick={() => dispatch(togglePopup(
                  POPUP_TYPE.CONFIRM_PWD,
                  true,
                  { onValidAction: APP.DO_DISCONNECT_FACEBOOK },
                ))}
              />
            </div>
          </div>
        </div>
      );
    }

    return renderDataContentView;
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <div
        className="settings-animation"
        style={getDataContainerStyle()}
      >
        <div onClick={() => onUpdate(NAV_SECTION.ACCOUNTS, null)} style={styles.titleContainer}>
          <div style={styles.infoTitle}>{labels.facebook}</div>
          <div style={styles.infoDesc}>{labels.facebookDesc}</div>
        </div>
        <div onClick={() => onUpdate(NAV_SECTION.ACCOUNTS, null)} style={styles.edit}>
          {editLabel}
        </div>
        <div style={styles.connectedLabels}>
          {Localization.Labels.formatString(
            labels.connected,
            connectedUser.getLinkedAccountNumber(),
          )}
        </div>
        {renderDataContent()}
      </div>
    </div>
  );
};

ConnectedAccounts.propTypes = {
  isEditMode: PropTypes.bool,
  onUpdate: PropTypes.func.isRequired,
};

ConnectedAccounts.defaultProps = {
  isEditMode: false,
};

export default ConnectedAccounts;
