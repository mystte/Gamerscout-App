import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../../../../views/elements/svgicon/SVGIcon';
import styles from './styles';
import { NOTIFICATION_TYPE } from '../../../../../datamanager/models/NotificationRecord';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import UseTimeout from '../../../../views/hooks/UseTimeout';

const Notification = ({ title, type, onClose, id, isPersistent }) => {
  const icon = (type === NOTIFICATION_TYPE.ALERT) ? 'notif-alert-type' : 'info';
  let timeout = null;

  if (!isPersistent)
    timeout = UseTimeout(() => onClose(id), 7000);

  const onCloseNotification = () => {
    if (timeout)
      clearTimeout(timeout);
    onClose(id);
  }

  return (
    <div
      style={{
        ...styles.container,
        ...styles[type],
      }}
    >
      <SVGIcon
        width={16}
        height={16}
        name={icon}
      />
      <span className="ellipsis" style={styles.title}>{title}</span>
      <span style={styles.close}>
        <Button
          icon="notif-close"
          theme={BUTTON_THEME.SIMPLE}
          onClick={onCloseNotification}
        />
      </span>
    </div>
  );
}

Notification.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
  onClose: PropTypes.func.isRequired,
  isPersistent: PropTypes.bool,
};

Notification.defaultProps = {
  type: NOTIFICATION_TYPE.DEFAULT,
  isPersistent: false,
};

export default Notification;
