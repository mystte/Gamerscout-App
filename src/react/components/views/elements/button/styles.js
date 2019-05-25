import { colorNameToHex } from '../../../../utils/color';

const styles = {
  container: {
    width: 86,
    height: 36,
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 600,
    color: colorNameToHex('white'),
    borderRadius: 1,
    border: 'none',
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconContainer: {
    paddingRight: 11,
  },

  blue: {
    background: `linear-gradient(135deg, #1991EB 0%, #2DA1F8 100%)`,
  },

  red: {
    background: `linear-gradient(135deg, #F85359 0%, #DC151D 100%)`,
  },

  dark: {
    background: colorNameToHex('darkgrey'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
  },

  grey: {
    background: colorNameToHex('oxfordblue'),
  },
};

export default styles;
