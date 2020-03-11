import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import SVGIcon from '../../../../views/elements/svgicon/SVGIcon';
import Input from '../../../../views/elements/input/Input';
import DropDown, {
  SELECT_TYPE,
  DROPDOWN_TYPE,
} from '../../../../views/elements/dropdown/DropDown';
import Button from '../../../../views/elements/button/Button';

const SearchBarMobile = ({
  regionsList,
  onRegionChange,
  onSearch,
  onSearchChange,
  disableEnter,
  labels,
}) => {
  return (
    <div style={{ ...styles.container, ...styles.mbContainer }}>
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
};

SearchBarMobile.propTypes = {
  regionsList: PropTypes.object.isRequired,
  onRegionChange: PropTypes.func.isRequired,
  onSearch: PropTypes.func.isRequired,
  onSearchChange: PropTypes.func.isRequired,
  labels: PropTypes.object.isRequired,
  disableEnter: PropTypes.func.isRequired,
};

SearchBarMobile.defaultProps = {};

export default SearchBarMobile;
