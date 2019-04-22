import { colorNameToHex } from '../../../../utils/color';

const styles = {
  input: {
    color: colorNameToHex('white'),
    width: 245,
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
  },

  title: {
    marginBottom: 6,
    color: colorNameToHex('regentgray'),
    fontSize: 14,
  },

  message: {
    color: colorNameToHex('red'),
    fontSize: 12,
    height: 19,
    marginTop: 3,
  },
};

export default styles;