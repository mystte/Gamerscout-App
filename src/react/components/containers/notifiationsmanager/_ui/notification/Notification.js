import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../../../../views/elements/svgicon/SVGIcon';
import styles from './styles';
import { NOTIFICATION_TYPE } from '../../../../../datamanager/models/NotificationRecord';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';

const Notification = ({ title, type, onClose, id }) => {

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
        name={'info'}
      />
      <span className="ellipsis" style={styles.title}>{title}</span>
      <span style={styles.close}>
        <Button
          icon="notif-close"
          theme={BUTTON_THEME.SIMPLE}
          onClick={() => onClose(id)}
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
};

Notification.defaultProps = {
  type: NOTIFICATION_TYPE.DEFAULT,
};

export default Notification;
