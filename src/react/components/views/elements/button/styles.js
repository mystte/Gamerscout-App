import { colorNameToHex } from '../../../../utils/color';

const styles = {
  container: {
    width: '100%',
    height: 36,
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 600,
    color: colorNameToHex('white'),
    borderRadius: 1,
    border: 'none',
    flexDirection: 'row',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },

  iconContainer: {
    paddingRight: 11,
  },

  blue: {
    background: `linear-gradient(180deg, #1991EB 0%, #2DA1F8 100%)`,
  },

  red: {
    background: `linear-gradient(180deg, #F85359 0%, #DC151D 100%)`,
  },

  dark: {
    background: colorNameToHex('darkgrey'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
  },

  grey: {
    background: `linear-gradient(180deg, #516173 0%, #3B4857 100%)`,
  },

  simple: {
    width: 'auto',
    height: 'auto',
    padding: 0,
    backgroundColor: 'transparent',
  },

  link: {
    width: 'auto',
    height: 'auto',
    padding: 0,
    backgroundColor: 'transparent',
    color: colorNameToHex('dodgerblue'),
    fontWeight: 200,
  },

  disabled: {
    opacity: 0.3,
    cursor: 'default',
  },
};

export default styles;
