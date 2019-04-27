import { colorNameToHex } from '../../../../../../../../../utils/color';

const styles = {
  button: {
    width: 118,
    height: 44,
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

  },
};

export default styles;