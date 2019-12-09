import { colorNameToHex, colorNameToRgba } from '../../../../../utils/color';

const styles = {
  container: {
    minWidth: 353,
    height: 50,
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    backgroundColor: colorNameToRgba('black', 0),
    flexDirection: 'row',
    marginTop: 59,
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
    justifyContent: 'center',
    alignItems: 'center',
  },

  inputStyle: {
    width: 200,
    height: 50,
    border: 'none',
    backgroundColor: colorNameToRgba('black', 0),
  },

  dropdownContainer: {
    width: 61,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  searchButtonContainer: {
    width: 50,
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
  },

  searchButton: {
    width: '100%',
    height: '100%',
    borderLeft: 'none',
    borderTop: 'none',
    borderRight: 'none',
    borderBottom: 'none',
    backgroundColor: colorNameToHex('dodgerblue'),
    borderRadius: 0,
    padding: 0,
  },
};

export default styles;
