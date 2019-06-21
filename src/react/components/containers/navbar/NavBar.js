import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import {
  getHomeUrl,
  getGamerDetailsUrl,
} from '../../../config/routes';
import {
  GAME_PLATFORM,
  GAME_REGIONS,
  GAME_CODE,
} from '../../../datamanager/models/AppRecord';
import {
  loadGamerDetails,
} from '../../../redux/actions/gamerDetails';
import {
  togglePopup,
} from '../../../redux/actions/app';
import SVGIcon from '../../views/elements/svgicon/SVGIcon';
import SearchBar from './_ui/searchbar/SearchBar';
import styles from './styles';
import UserMenu from './_ui/usermenu/UserMenu';
import { POPUP_TYPE } from '../../../datamanager/models/PopupRecord';
import { USER_MENU_ACTIONS } from './_ui/usermenu/enums';

const mapStateToProps = state => ({
  config: state.app.get('data'),
  loading: state.app.get('loading'),
  error: state.app.get('error'),
  isAuthenticated: state.app.getIn(['data', 'isAuthenticated']),
  user: state.app.getIn(['data', 'user']),
});

class NavBar extends PureComponent {
  static propTypes = {
    config: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    match: PropTypes.object.isRequired,
    loading: PropTypes.bool.isRequired,
    history: PropTypes.object.isRequired,
    isAuthenticated: PropTypes.bool,
    region: PropTypes.string,
    user: PropTypes.object,
  };

  static defaultProps = {
    config: null,
    isAuthenticated: false,
    user: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedPlatform: GAME_PLATFORM.RIOT,
      searchValue: null,
      selectedRegion: GAME_REGIONS.NA,
    };
  }

  onRegionChange = (newRegion) => {
    this.setState({
      selectedRegion: newRegion.name,
    });
  }

  onSearchInputChange = (event) => {
    this.setState({
      searchValue: event.target.value,
    });
  }

  userMenuActions = (action) => {
    console.log("userMenuAction", action);
    if (action === USER_MENU_ACTIONS.SIGNIN) {
      this.props.dispatch(togglePopup(POPUP_TYPE.SIGNIN));
    } else if (action === USER_MENU_ACTIONS.SIGNUP) {
      this.props.dispatch(togglePopup(POPUP_TYPE.SIGNUP));
    }
  }

  onSearchClick = () => {
    if (this.state.searchValue) {
      this.props.history.push(getGamerDetailsUrl(GAME_PLATFORM.RIOT, this.state.selectedRegion, GAME_CODE.LEAGUE_OF_LEGENDS, this.state.searchValue));
      this.props.dispatch(loadGamerDetails(
        GAME_PLATFORM.RIOT,
        this.state.selectedRegion,
        GAME_CODE.LEAGUE_OF_LEGENDS,
        this.state.searchValue,
      ));
    }
  }

  render() {
    if (!this.props.config) return null;

    return (
      <React.Fragment>
        {this.props.loading &&
          <div>Loading...</div>
        }
        {!this.props.loading &&
          <div style={styles.container}>
            <Link style={styles.link}
              to={getHomeUrl()}
            >
              <SVGIcon
                width='120'
                height='22'
                name="logo-beta"
              />
            </Link>
            <SearchBar
              regionsList={this.props.config.regions.riot.regionsCode}
              onRegionChange={this.onRegionChange}
              onSearch={this.onSearchClick}
              onSearchChange={this.onSearchInputChange}
            />
            <div style={styles.userMenu}>
              <UserMenu
                user={this.props.user}
                userMenuActions={this.userMenuActions}
                isAuthenticated={this.props.isAuthenticated}
              />
            </div>
          </div>
        }
      </React.Fragment>
    );
  }
}

export default withRouter(
  connect(mapStateToProps)(NavBar)
);
