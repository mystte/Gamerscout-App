import React from 'react';
import { Link } from 'react-router-dom';
import { PropTypes } from 'prop-types';
import SVGIcon from '../../views/elements/svgicon/SVGIcon';
import SearchBar from './_ui/searchbar/SearchBar';
import styles from './styles';
import UserMenu from './_ui/usermenu/UserMenu';
import { getHomeUrl } from '../../../config/routes';

const NavBarMobile = ({
  loading,
  config,
  onRegionChange,
  onSearchInputChange,
  onSearchClick,
  isAuthenticated,
  userMenuActions,
  user,
}) => {
  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && (
        <div style={styles.mbContainer}>
          <Link style={styles.mbLink} to={getHomeUrl()}>
            <SVGIcon width="120" height="22" name="logo-beta" />
          </Link>
          <SearchBar
            regionsList={config.regions.riot.regionsCode}
            onRegionChange={onRegionChange}
            onSearch={onSearchClick}
            onSearchChange={onSearchInputChange}
          />
          <div>
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
