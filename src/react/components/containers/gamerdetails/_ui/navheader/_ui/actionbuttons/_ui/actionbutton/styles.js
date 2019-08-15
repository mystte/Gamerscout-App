import { colorNameToHex } from '../../../../../../../../../utils/color';

const styles = {
  button: {
    width: 118,
    height: 43,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'uppercase',
    backgroundColor: colorNameToHex('ebonyclay'),
    color: colorNameToHex('regentgray'),
    fontWeight: 'bold',
    borderColor: colorNameToHex('dimgrey'),
    borderTop: 'none',
    borderRight: 'none',
    borderBottom: 'none',
  },

  lastButton: {
    borderRightStyle: 'solid',
    borderWidth: 1,
    borderRightColor: colorNameToHex('dimgrey'),
  },

  icon: {
    marginRight: 9,
  },

  label: {
    fontWeight: 600,
    fontSize: 12,
  },

  selected: {
    backgroundColor: colorNameToHex('dimgrey'),
    color: colorNameToHex('white'),
  },
};

export default styles;
