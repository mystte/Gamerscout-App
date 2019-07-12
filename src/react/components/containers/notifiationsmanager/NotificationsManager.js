import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Notification from './_ui/notification/Notification';
import styles from './styles';
import { deleteNotification } from '../../../redux/actions/notifications';

const NotificationsManager = () => {
  const notifications = useSelector(state => state.notifications.get('notificationsManagerRecord'));
  const dispatch = useDispatch();

  const renderNotifications = () => {
    return notifications.get('notifList').map((notification, idx) => {
      return (
        <CSSTransition
          timeout={800}
          classNames="notification"
          key={`notification-${idx}`}
          appear
          unmountOnExit
        >
        <div
          style={styles.notificationContainer}
        >
          <Notification
            id={idx}
            title={notification.title}
            type={notification.type}
            onClose={onNotificationClose}
          />
        </div>
        </CSSTransition>);
      });
    }

  const onNotificationClose = (id) => {
    console.log("id = ", id);
    dispatch(deleteNotification(id));
  }

  return (
    <div style={styles.container}>
      {notifications &&
        <TransitionGroup>
          {renderNotifications()}
        </TransitionGroup>
      }
    </div>
  );
}

NotificationsManager.propTypes = {
};

NotificationsManager.defaultProps = {
};

export default NotificationsManager;
