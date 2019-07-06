import React from 'react';
import { useSelector } from 'react-redux';

import Notification from './_ui/notification/Notification';
// import PropTypes from 'prop-types';

import styles from './styles';

const NotificationsManager = () => {
  const notifications = useSelector(state => state.notifications.get('notificationsManagerRecord'));

  const renderNotifications = () => {
    return notifications.get('notifList').map((notification, idx) => {
      return (<div key={`notification-${idx}`}>
        <Notification
          title={notification.title}
          type={notification.type}
        />
      </div>);
    });
  }

  return (
    <div style={styles.container}>
      {notifications && renderNotifications()}
    </div>
  );
}

NotificationsManager.propTypes = {
};

NotificationsManager.defaultProps = {
};

export default NotificationsManager;
