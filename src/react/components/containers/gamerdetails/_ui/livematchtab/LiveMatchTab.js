import React from 'react';
import { PropTypes } from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import LiveTeamContainer from './_ui/liveteamcontainer/LiveTeamContainer';

const labels = Localization.Labels.gamerDetails.liveMatchCard;

const LiveMatchTab = ({ staticDataUrl }) => {
  return (
    <div style={styles.container}>
      <div style={styles.teamContainer}>
        <LiveTeamContainer
          staticDataUrl={staticDataUrl}
          title={labels.blueTeam}
        />
      </div>
      <div style={styles.separator} />
      <div style={styles.teamContainer}>
        <LiveTeamContainer
          staticDataUrl={staticDataUrl}
          title={labels.redTeam}
        />
      </div>
    </div>
  );
};

LiveMatchTab.propTypes = {
  staticDataUrl: PropTypes.string,
};

LiveMatchTab.propTypes = {
  staticDataUrl: null,
};

export default LiveMatchTab;
