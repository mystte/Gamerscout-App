import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SVGIcon from '../../../../views/elements/svgicon/SVGIcon';
import Input from '../../../../views/elements/input/Input';
import Localisation from '../../../../../config/localization/Localization';
import DropDown, {
  SELECT_TYPE,
  DROPDOWN_TYPE,
} from '../../../../views/elements/dropdown/DropDown';
import Button from '../../../../views/elements/button/Button';
import UseKeyPress from '../../../../views/hooks/UseKeyPress';
import UseMediaQueries from '../../../../views/hooks/UseMediaQueries';
import SearchBarMobile from './SearchBar.mobile';

const SearchBar = ({
  regionsList,
  onRegionChange,
  onSearch,
  onSearchChange,
}) => {
  const labels = Localisation.Labels.navBar;
  const { isDesktop } = UseMediaQueries();
  const enterPressed = UseKeyPress('Enter');
  let view = null;

  const disableEnter = e => (e.which === 13 ? e.preventDefault() : null);

  useEffect(
    () => () => {
      if (enterPressed) onSearch();
    },
    [enterPressed]
  );

  if (isDesktop)
    view = (
      <div style={styles.container}>
        <div style={styles.platformDropdown}>
          <SVGIcon width={20} height={20} name={'platforms/lol'} />
        </div>
        <div style={styles.searchContainer}>
          <form onKeyDown={disableEnter} autoComplete="false">
            <Input
              length="50"
              placeholder={labels.placeholder}
              inputStyle={styles.inputStyle}
              onChange={onSearchChange}
            />
          </form>
          <div style={styles.dropdownContainer}>
            <DropDown
              options={regionsList.toArray()}
              selectType={SELECT_TYPE.SIMPLE}
              dropDown={DROPDOWN_TYPE.DEFAULT}
              onChange={onRegionChange}
            />
          </div>
          <div style={styles.searchButtonContainer}>
            <Button
              icon="search"
              buttonStyle={styles.searchButton}
              onClick={onSearch}
            />
          </div>
        </div>
      </div>
    );
  else
    view = (
      <SearchBarMobile
        regionsList={regionsList}
        onRegionChange={onRegionChange}
        onSearch={onSearch}
        onSearchChange={onSearchChange}
        disableEnter={disableEnter}
        labels={labels}
      />
    );

  return view;
};

SearchBar.propTypes = {
  regionsList: PropTypes.object.isRequired,
  onRegionChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

SearchBar.defaultProps = {};

export default SearchBar;
