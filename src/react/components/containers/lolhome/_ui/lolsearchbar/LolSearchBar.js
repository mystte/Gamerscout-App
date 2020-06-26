import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import Input from '../../../../views/elements/input/Input';
import Localisation from '../../../../../config/localization/Localization';
import DropDown, {
  DROPDOWN_TYPE,
  SELECT_TYPE,
} from '../../../../views/elements/dropdown/DropDown';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';

const LolSearchBar = ({
  regionsList,
  onSearchClick,
  onRegionChange,
  onInputChange,
}) => {
  const labels = Localisation.Labels.navBar;

  const disableEnter = e => (e.which === 13 ? e.preventDefault() : null);

  return (
    <div style={styles.container}>
      <div style={styles.searchContainer}>
        <form
          style={{
            width: '100%',
          }}
          onKeyDown={disableEnter}
          autoComplete="false"
        >
          <Input
            length="50"
            focus
            placeholder={labels.placeholder}
            inputStyle={styles.inputStyle}
            onChange={onInputChange}
          />
        </form>
        <div style={styles.dropdownContainer}>
          <DropDown
            height={50}
            options={regionsList.toArray()}
            selectType={SELECT_TYPE.SIMPLE}
            dropDown={DROPDOWN_TYPE.DEFAULT}
            onChange={onRegionChange}
          />
        </div>
        <div style={styles.searchButtonContainer}>
          <Button
            width={25}
            height={25}
            icon="search"
            buttonStyle={styles.searchButton}
            theme={BUTTON_THEME.SIMPLE}
            onClick={onSearchClick}
          />
        </div>
      </div>
    </div>
  );
};

LolSearchBar.propTypes = {
  regionsList: PropTypes.object.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSearchClick: PropTypes.func.isRequired,
  onRegionChange: PropTypes.func.isRequired,
};

LolSearchBar.defaultProps = {};

export default LolSearchBar;
