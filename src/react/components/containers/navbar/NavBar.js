import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getHomeUrl,
  getGamerDetailsUrl,
  getSettingsUrl,
  getValorantHomeUrl,
} from '../../../config/routes';
import {
  GAME_PLATFORM,
  GAME_REGIONS,
  GAME_CODE,
} from '../../../datamanager/models/AppRecord';
import { loadGamerDetails } from '../../../redux/actions/gamerDetails';
import { togglePopup, doLogout } from '../../../redux/actions/app';
import SVGIcon from '../../views/elements/svgicon/SVGIcon';
import styles from './styles';
import UserMenu from './_ui/usermenu/UserMenu';
import { POPUP_TYPE } from '../../../datamanager/models/PopupRecord';
import { USER_MENU_ACTIONS } from './_ui/usermenu/enums';
import UseMediaQueries from '../../views/hooks/UseMediaQueries';
import NavBarMobile from './NavBar.mobile';
import GameSelector from './_ui/gameselector/GameSelector';
import Localization from '../../../config/localization/Localization';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  loading: state.app.get('loading'),
  error: state.app.get('error'),
  isAuthenticated: state.app.getIn(['data', 'isAuthenticated']),
  user: state.app.getIn(['data', 'user']),
});

const NavBar = ({
  config,
  dispatch,
  loading,
  history,
  isAuthenticated,
  user,
}) => {
  const [selectedPlatform] = useState(GAME_PLATFORM.RIOT);
  const [selectedGame, setSelectedGame] = useState(GAME_CODE.LEAGUE_OF_LEGENDS);
  const [searchValue, setSearchValue] = useState(null);
  const [selectedRegion, setSelectedRegion] = useState(GAME_REGIONS.NA);
  const { isDesktop } = UseMediaQueries();
  const location = useLocation();
  let view = null;

  useEffect(() => {
    if (location.pathname === Localization.Urls.valorantHome) {
      setSelectedGame(GAME_CODE.VALORANT);
    }
  }, []);

  console.log('selectedGame = ', selectedGame);
  const onGameSelect = selected => {
    console.log('selected', selected);
    if (selected.name === GAME_CODE.VALORANT) {
      history.push(getValorantHomeUrl());
    } else if (selected.name === GAME_CODE.LEAGUE_OF_LEGENDS) {
      console.log('Push home');
      history.push(getHomeUrl());
    }
  };

  const onRegionChange = newRegion => {
    setSelectedRegion(newRegion.name);
  };

  const onSearchInputChange = event => {
    if (event) setSearchValue(event.target.value);
  };

  const userMenuActions = action => {
    if (action === USER_MENU_ACTIONS.SIGNIN) {
      dispatch(togglePopup(POPUP_TYPE.SIGNIN));
    } else if (action === USER_MENU_ACTIONS.SIGNUP) {
      dispatch(togglePopup(POPUP_TYPE.SIGNUP));
    } else if (action === USER_MENU_ACTIONS.LOGOUT) {
      dispatch(doLogout());
    } else if (action === USER_MENU_ACTIONS.SETTINGS) {
      history.push(getSettingsUrl());
    }
  };

  const onSearchClick = () => {
    if (searchValue) {
      history.push(
        getGamerDetailsUrl(
          selectedPlatform,
          selectedRegion,
          GAME_CODE.LEAGUE_OF_LEGENDS,
          searchValue
        )
      );
      dispatch(
        loadGamerDetails(
          selectedPlatform,
          selectedRegion,
          GAME_CODE.LEAGUE_OF_LEGENDS,
          searchValue
        )
      );
    }
  };

  if (!config) return null;
  if (isDesktop)
    view = (
      <>
        {loading && <div>Loading...</div>}
        {!loading && (
          <div style={styles.container}>
            <Link style={styles.link} to={getHomeUrl()}>
              <SVGIcon width="120" height="22" name="logo-beta" />
            </Link>
            <div style={styles.gameSelectorContainer}>
              <GameSelector onGameSelect={onGameSelect} />
            </div>
            <div style={styles.userMenu}>
              <UserMenu
                user={user}
                userMenuActions={userMenuActions}
                isAuthenticated={isAuthenticated}
              />
            </div>
          </div>
        )}
      </>
    );
  else
    view = (
      <NavBarMobile
        loading={loading}
        config={config}
        onRegionChange={onRegionChange}
        onSearchInputChange={onSearchInputChange}
        onSearchClick={onSearchClick}
        isAuthenticated={isAuthenticated}
        userMenuActions={userMenuActions}
        user={user}
      />
    );
  return view;
};

NavBar.propTypes = {
  config: PropTypes.object,
  dispatch: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

NavBar.defaultProps = {
  config: null,
  isAuthenticated: false,
  user: null,
};

export default withRouter(connect(mapStateToProps)(NavBar));
