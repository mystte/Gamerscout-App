import React, { useState, useEffect } from 'react';
import { connect, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Localization from '../../../config/localization/Localization';
import SVGIcon, { IMG_TYPE } from '../../views/elements/svgicon/SVGIcon';

import styles from './styles';
import HomeSearchBar from './_ui/homesearchbar/HomeSearchBar';
import { GAME_PLATFORM, GAME_CODE, GAME_REGIONS } from '../../../datamanager/models/AppRecord';
import { getGamerDetailsUrl } from '../../../config/routes';
import { loadGamerDetails } from '../../../redux/actions/gamerDetails';
import UseKeyPress from '../../views/hooks/UseKeyPress';
import Button, { BUTTON_THEME } from '../../views/elements/button/Button';
import { togglePopup } from '../../../redux/actions/app';
import { POPUP_TYPE } from '../../../datamanager/models/PopupRecord';
import Footer from '../footer/Footer';
import { loadHome } from '../../../redux/actions/home';
import Playerlist from '../../views/playerlist/Playerlist';

const mapStateToProps = (state) => ({
  config: state.app.get('data'),
  homeRecord: state.home.getIn(['data', 'homeRecord']),
  loading: state.app.get('loading'),
  error: state.app.get('error'),
});

const Home = ({
  config,
  homeRecord,
  history,
}) => {
  if (!config) return null;
  const labels = Localization.Labels.home;
  const dispatch = useDispatch();
  const [searchPlatform] = useState(GAME_PLATFORM.RIOT);
  const [searchGame] = useState(GAME_CODE.LEAGUE_OF_LEGENDS);
  const [searchValue, setSearchValue] = useState(null);
  const [searchRegion, setSearchRegion] = useState(GAME_REGIONS.NA);
  const enterPressed = UseKeyPress('Enter');

  const onSearchClick = () => {
    if (searchValue) {
      history.push(getGamerDetailsUrl(
        searchPlatform,
        searchRegion,
        searchGame,
        searchValue,
      ));
      dispatch(loadGamerDetails(
        searchPlatform,
        searchRegion,
        searchGame,
        searchValue,
      ));
    }
  };

  const setAndGoToPlayer = (player) => {
    const newSearchValue = player.gamertag;
    const playerRegion = player.region;
    setSearchValue(newSearchValue);
    setSearchRegion(playerRegion);
    history.push(getGamerDetailsUrl(
      searchPlatform,
      playerRegion,
      searchGame,
      newSearchValue,
    ));
    dispatch(loadGamerDetails(
      searchPlatform,
      playerRegion,
      searchGame,
      newSearchValue,
    ));
  };

  useEffect(() => {
    dispatch(loadHome());
  }, []);

  useEffect(() => {
    if (enterPressed) onSearchClick();
  }, [enterPressed]);

  const onRegionChanged = (newRegion) => {
    setSearchRegion(newRegion.name);
  };

  const onCreateAccountClick = () => {
    dispatch(togglePopup(POPUP_TYPE.SIGNUP));
  };

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.title}>{labels.title}</h1>
        <h1 style={styles.title}>{labels.title2}</h1>
        <HomeSearchBar
          onInputChange={(e) => setSearchValue(e.target.value)}
          regionsList={config.regions.riot.regionsCode}
          onRegionChange={onRegionChanged}
          onSearchClick={onSearchClick}
        />
        <p style={styles.desc}>{labels.desc}</p>
        <div style={styles.homeBg}>
          <SVGIcon
            type={IMG_TYPE.PNG}
            width={'100%'}
            height={'100%'}
            name={'home/background'}
          />
        </div>
      </div>
      <div style={styles.statsBandeau}>
        <div style={styles.approvalsContainer}>
          <div style={styles.approvalsPictContainer}>
            <SVGIcon
              type={IMG_TYPE.PNG}
              name={'home/approvals'}
              width={170}
              height={115}
            />
            <div style={styles.separator} />
            <SVGIcon
              type={IMG_TYPE.PNG}
              name={'home/disapprovals'}
              width={170}
              height={115}
            />
          </div>
          <span style={styles.statTitle}>
            {labels.ratings}
          </span>
        </div>
        <div style={styles.approvalsContainer}>
          <SVGIcon
            type={IMG_TYPE.PNG}
            name={'home/review'}
            width={350}
            height={148}
          />
          <span style={styles.statTitle}>
            {labels.reviews}
          </span>
        </div>
        <div style={styles.approvalsContainer}>
          <SVGIcon
            type={IMG_TYPE.PNG}
            name={'home/trends'}
            width={350}
            height={119}
          />
          <span style={styles.statTitle}>
            {labels.stats}
          </span>
        </div>
      </div>
      <div style={styles.createAccountContainer}>
        <h2 style={styles.createAccountLabel}>{labels.createAccountDesc}</h2>
        <Button
          label={labels.createAccount}
          buttonStyle={styles.createAccountBtn}
          theme={BUTTON_THEME.BLUE}
          onClick={onCreateAccountClick}
        />
      </div>
      <div style={styles.featuredGamersContainers}>
        <h2 style={styles.ftTitle}>{labels.featuredGamers}</h2>
        {homeRecord
        && <div style={styles.playersListContainer}>
          <div style={styles.playerList}>
            <span style={styles.playerListTitle}>{labels.recent.toUpperCase()}</span>
            <Playerlist goToPlayer={setAndGoToPlayer} players={homeRecord.recentReviewedPlayers} />
          </div>
          <div style={styles.playerList}>
            <span style={styles.playerListTitle}>{labels.highestRated.toUpperCase()}</span>
            <Playerlist goToPlayer={setAndGoToPlayer} players={homeRecord.highestRatedPlayers} />
          </div>
          <div style={styles.playerList}>
            <span style={styles.playerListTitle}>{labels.mostReviewed.toUpperCase()}</span>
            <Playerlist goToPlayer={setAndGoToPlayer} players={homeRecord.mostReviewedPlayers} />
          </div>
          </div>
        }
      </div>
      <Footer />
    </div>
  );
};

Home.propTypes = {
  config: PropTypes.object,
  homeRecord: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

Home.defaultProps = {
  config: null,
  homeRecord: null,
};

export default withRouter(
  connect(mapStateToProps)(Home),
);
