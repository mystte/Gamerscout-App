import { colorNameToHex } from "../../../../../utils/color";

const styles = {
  container: {
    width: 353,
    height: 36,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    backgroundColor: colorNameToHex('darkgrey'),
    marginLeft: 31,
    flexDirection: 'row',
  },

  searchContainer: {
    flexDirection: 'row',
  },

  platformDropdown: {
    width: 54,
    padding: 8,
    paddingLeft: 9,
    height: '100%',
    borderRightStyle: 'solid',
    borderRightWidth: 1,
    borderRightColor: colorNameToHex('dimgrey'),
  },

  inputStyle: {
    width: 200,
    height: '100%',
    border: 'none',
    backgroundColor: colorNameToHex('darkgrey'),
  },

  dropdownContainer: {
    width: 61,
  },

  searchButtonContainer: {
    width: 36,
    height: '100%',
  },

  searchButton: {
    width: '100%',
    height: '100%',
    borderLeft: 'none',
    borderTop: 'none',
    borderRight: 'none',
    borderBottom: 'none',
  },
};

export default styles;
