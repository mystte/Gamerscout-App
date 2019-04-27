import React from 'react';
import PropTypes from 'prop-types';

import ActionButton, { BUTTON_TYPE } from './_ui/actionbutton/ActionButton';
import styles from './styles';

const ActionButtons = ({}) => {
  return (
    <div style={styles.container}>
      <ActionButton type={BUTTON_TYPE.OVERVIEW} onClick={() => { }} label='overview' selected />
      <ActionButton type={BUTTON_TYPE.REVIEWS} onClick={() => { }} label='reviews' selected={false} />
      <ActionButton type={BUTTON_TYPE.CHAMPIONS} onClick={() => { }} label='champions' selected={false} />
      <ActionButton type={BUTTON_TYPE.LEAGUES} onClick={() => { }} label='leagues' selected={false} />
      <ActionButton type={BUTTON_TYPE.LIVE_MATCH} onClick={() => { }} label='live match' selected={false} />
    </div>
  );
}

ActionButtons.propTypes = {
};

ActionButtons.defaultProps = {
};

export default ActionButtons;
