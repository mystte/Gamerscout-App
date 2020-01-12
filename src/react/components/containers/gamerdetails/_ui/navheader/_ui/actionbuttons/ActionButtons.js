import React from 'react';
import PropTypes from 'prop-types';

import ActionButton, { BUTTON_TYPE } from './_ui/actionbutton/ActionButton';
import styles from './styles';

const ActionButtons = ({ onSelectTab, selectedTab }) => (
  <div style={styles.container}>
    <ActionButton
      type={BUTTON_TYPE.OVERVIEW}
      onClick={onSelectTab}
      selected={selectedTab === BUTTON_TYPE.OVERVIEW}
    />
    <ActionButton
      type={BUTTON_TYPE.REVIEWS}
      onClick={onSelectTab}
      selected={selectedTab === BUTTON_TYPE.REVIEWS}
    />
    <ActionButton
      type={BUTTON_TYPE.CHAMPIONS}
      onClick={onSelectTab}
      selected={selectedTab === BUTTON_TYPE.CHAMPIONS}
    />
    <ActionButton
      type={BUTTON_TYPE.LEAGUES}
      onClick={onSelectTab}
      selected={selectedTab === BUTTON_TYPE.LEAGUES}
    />
    <ActionButton
      type={BUTTON_TYPE.LIVE_MATCH}
      onClick={onSelectTab}
      selected={selectedTab === BUTTON_TYPE.LIVE_MATCH}
    />
  </div>
);

ActionButtons.propTypes = {
  onSelectTab: PropTypes.func.isRequired,
  selectedTab: PropTypes.string,
};

ActionButtons.defaultProps = {
  selectedTab: BUTTON_TYPE.OVERVIEW,
};

export default ActionButtons;
