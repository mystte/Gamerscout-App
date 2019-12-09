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

const mapStateToProps = (state) => ({
  config: state.app.get('data'),
  loading: state.app.get('loading'),
  error: state.app.get('error'),
});

const Home = ({
  config,
  history,
}) => {
  if (!config) return null;
  const dispatch = useDispatch();
  const labels = Localization.Labels.home;
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

  useEffect(() => () => {
    if (enterPressed) onSearchClick();
  }, [enterPressed]);

  const onRegionChanged = (newRegion) => {
    setSearchRegion(newRegion.name);
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
      <div></div>
    </div>
  );
};

Home.propTypes = {
  config: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

Home.defaultProps = {
};

export default withRouter(
  connect(mapStateToProps)(Home),
);
