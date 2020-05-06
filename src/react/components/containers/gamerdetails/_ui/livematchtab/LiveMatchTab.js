import React from 'react';
import { PropTypes } from 'prop-types';
import { useSelector } from 'react-redux';
import AccessTimeIcon from '@material-ui/icons/AccessTime';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import LiveTeamContainer from './_ui/liveteamcontainer/LiveTeamContainer';
import { colorNameToHex } from '../../../../../utils/color';
import UseMediaQueries from '../../../../views/hooks/UseMediaQueries';

const labels = Localization.Labels.gamerDetails.liveMatchCard;

const LiveMatchTab = ({ staticDataUrl, staticChampions }) => {
  const { getResponsiveStyle } = UseMediaQueries();
  const liveMatchRecord = useSelector(state =>
    state.gamerDetails.getIn(['data', 'liveMatchRecord'])
  );

  return liveMatchRecord.blueTeam.size > 0 ? (
    <div style={styles[getResponsiveStyle('container')]}>
      <div style={styles[getResponsiveStyle('teamContainer')]}>
        <LiveTeamContainer
          staticChampions={staticChampions}
          staticDataUrl={staticDataUrl}
          title={labels.blueTeam}
          data={liveMatchRecord.blueTeam}
        />
      </div>
      <div style={styles[getResponsiveStyle('separator')]} />
      <div style={styles[getResponsiveStyle('teamContainer')]}>
        <LiveTeamContainer
          staticChampions={staticChampions}
          staticDataUrl={staticDataUrl}
          title={labels.redTeam}
          data={liveMatchRecord.redTeam}
        />
      </div>
    </div>
  ) : (
    <div style={styles.zeroState}>
      <AccessTimeIcon fontSize="large" htmlColor={colorNameToHex('manatee')} />
      <div style={styles.zeroStateLbl}>{labels.zeroState}</div>
    </div>
  );
};

LiveMatchTab.propTypes = {
  staticDataUrl: PropTypes.string,
  staticChampions: PropTypes.object,
};

LiveMatchTab.defaultProps = {
  staticDataUrl: null,
  staticChampions: {},
};

export default LiveMatchTab;
