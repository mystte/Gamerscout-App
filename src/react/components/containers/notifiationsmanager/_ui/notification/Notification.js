import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon from '../../../../views/elements/svgicon/SVGIcon';
import styles from './styles';
import { NOTIFICATION_TYPE } from '../../../../../datamanager/models/NotificationRecord';

const Notification = ({ title, type }) => {

  return (
    <div style={{
        ...styles.container,
        ...styles[type],
      }}
    >
      <SVGIcon
        width={16}
        height={16}
        name={'info'}
      />
      <span style={styles.title} >{title}</span>
    </div>
  );
}

Notification.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

Notification.defaultProps = {
  type: NOTIFICATION_TYPE.DEFAULT,
};

export default Notification;
