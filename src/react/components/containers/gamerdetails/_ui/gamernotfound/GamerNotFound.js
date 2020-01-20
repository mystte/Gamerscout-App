import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import { loadHome } from '../../../../../redux/actions/home';
import Playerlist from '../../../../views/playerlist/Playerlist';
import { loadGamerDetails } from '../../../../../redux/actions/gamerDetails';
import { getGamerDetailsUrl } from '../../../../../config/routes';
import {
  GAME_PLATFORM,
  GAME_CODE,
} from '../../../../../datamanager/models/AppRecord';

const GamerNotFound = ({ history }) => {
  const config = useSelector(state => state.app.get('data'));
  if (!config) return null;
  const labels = Localization.Labels.gamerDetails.notFound;
  const homeLabels = Localization.Labels.home;
  const dispatch = useDispatch();
  const homeRecord = useSelector(state =>
    state.home.getIn(['data', 'homeRecord'])
  );
  const [searchPlatform] = useState(GAME_PLATFORM.RIOT);
  const [searchGame] = useState(GAME_CODE.LEAGUE_OF_LEGENDS);

  useEffect(() => {
    dispatch(loadHome());
  }, []);

  const getStaticDataUrlForPlatform = () =>
    config ? config.getStaticDataUrlForPlatform(GAME_PLATFORM.RIOT) : null;

  const setAndGoToPlayer = player => {
    const newSearchValue = player.gamertag;
    const playerRegion = player.region;
    history.push(
      getGamerDetailsUrl(
        searchPlatform,
        playerRegion,
        searchGame,
        newSearchValue
      )
    );
    dispatch(
      loadGamerDetails(searchPlatform, playerRegion, searchGame, newSearchValue)
    );
  };

  return (
    <div style={styles.container}>
      <div style={styles.title1}>{labels.title1}</div>
      <div style={styles.title2}>{labels.title2}</div>
      {/* <div style={styles.title3}>{labels.title3}</div> */}
      {homeRecord && (
        <div style={styles.playerList}>
          <span style={styles.playerListTitle}>
            {homeLabels.recent.toUpperCase()}
          </span>
          <Playerlist
            goToPlayer={setAndGoToPlayer}
            players={homeRecord.recentReviewedPlayers}
            staticDataPath={getStaticDataUrlForPlatform()}
          />
        </div>
      )}
    </div>
  );
};

GamerNotFound.propTypes = {
  history: PropTypes.object.isRequired,
};

GamerNotFound.defaultProps = {};

export default withRouter(GamerNotFound);
