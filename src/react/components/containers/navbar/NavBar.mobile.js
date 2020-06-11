import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import SVGIcon from '../../views/elements/svgicon/SVGIcon';
import styles from './styles';
import UserMenu from './_ui/usermenu/UserMenu';
import { getHomeUrl } from '../../../config/routes';

const NavBarMobile = ({ loading, isAuthenticated, userMenuActions, user }) => {
  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div style={styles.mbContainer}>
          <div style={styles.mbTopContainer}>
            <div styles={styles.mbUserMenuContainer}>
              <Link style={styles.mbLink} to={getHomeUrl()}>
                <SVGIcon width="120" height="22" name="logo-beta" />
              </Link>
            </div>
            <UserMenu
              user={user}
              userMenuActions={userMenuActions}
              isAuthenticated={isAuthenticated}
            />
          </div>
          <div>Game Selector</div>
        </div>
      )}
    </>
  );
};

NavBarMobile.propTypes = {
  onRegionChange: PropTypes.func.isRequired,
  onSearchInputChange: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  userMenuActions: PropTypes.func.isRequired,
  config: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  isAuthenticated: PropTypes.bool,
  user: PropTypes.object,
};

NavBarMobile.defaultProps = {
  config: null,
  isAuthenticated: false,
  user: null,
};

export default NavBarMobile;
