import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Notification from './_ui/notification/Notification';
import styles from './styles';
import { deleteNotification } from '../../../redux/actions/notifications';

const NotificationsManager = () => {
  const notifications = useSelector(state =>
    state.notifications.get('notificationsManagerRecord')
  );
  const dispatch = useDispatch();

  const onNotificationClose = id => {
    dispatch(deleteNotification(id));
  };

  const renderNotifications = () =>
    notifications.get('notifList').map((notification, idx) => (
      <CSSTransition
        timeout={800}
        classNames="notification"
        key={`notification-${idx}`}
        appear
        unmountOnExit
      >
        <div style={styles.notificationContainer}>
          <Notification
            id={idx}
            title={notification.title}
            type={notification.type}
            onClose={onNotificationClose}
            isPersistent={
              notification.isPersistent ? notification.isPersistent : false
            }
          />
        </div>
      </CSSTransition>
    ));

  return (
    <div style={styles.container}>
      {notifications && (
        <TransitionGroup>{renderNotifications()}</TransitionGroup>
      )}
    </div>
  );
};

NotificationsManager.propTypes = {};

NotificationsManager.defaultProps = {};

export default NotificationsManager;
