import React from 'react';
import PropTypes from 'prop-types';

import ActionButton, { BUTTON_TYPE } from './_ui/actionbutton/ActionButton';
import styles from './styles';

const ActionButtons = ({}) => {
  return (
    <div style={styles.container}>
      <ActionButton type={BUTTON_TYPE.OVERVIEW} onClick={() => { }} selected />
      <ActionButton type={BUTTON_TYPE.REVIEWS} onClick={() => { }} selected={false} />
      <ActionButton type={BUTTON_TYPE.CHAMPIONS} onClick={() => { }} selected={false} />
      <ActionButton type={BUTTON_TYPE.LEAGUES} onClick={() => { }} selected={false} />
      <ActionButton type={BUTTON_TYPE.LIVE_MATCH} onClick={() => { }} selected={false} />
    </div>
  );
}

ActionButtons.propTypes = {
};

ActionButtons.defaultProps = {
};

export default ActionButtons;
