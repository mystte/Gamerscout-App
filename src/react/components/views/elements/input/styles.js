import { colorNameToHex } from '../../../../utils/color';

const styles = {
  input: {
    color: colorNameToHex('white'),
    width: '100%',
    height: 36,
    backgroundColor: colorNameToHex('oxfordblue'),
    paddingTop: 9,
    paddingBottom: 8,
    paddingLeft: 15,
    paddingRight: 15,
    fontSize: 14,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorNameToHex('dimgrey'),
    outline: 'none',
    fontWeight: 600,
  },

  inputPassword: {
  },

  defaultTheme: {
    backgroundColor: colorNameToHex('darkgrey'),
  },

  title: {
    marginBottom: 6,
    color: colorNameToHex('regentgray'),
    fontSize: 14,
  },

  message: {
    color: colorNameToHex('cinnabar'),
    fontSize: 12,
    height: 19,
    marginTop: 3,
    fontWeight: 600,
  },

  inputContainer: {
    flexDirection: 'row',
  },

  iconLeftContainer: {
    minWidth: 36,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorNameToHex('dimgrey'),
    borderRight: 'none',
    backgroundColor: colorNameToHex('ebonyclay'),
  },

  focus: {
    borderColor: colorNameToHex('dodgerblue'),
  },

  error: {
    borderColor: colorNameToHex('cinnabar'),
  },

  valid: {
    borderColor: colorNameToHex('apple'),
  },
};

export default styles;
