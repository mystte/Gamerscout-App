import { colorNameToHex } from '../../../../../../../../../../../../../utils/color';

const styles = {
  approveButton: {
    width: '50%',
    height: 28,
    fontSize: 12,
    textTransform: 'uppercase',
    backgroundColor: colorNameToHex('ebonyclay'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border: 'none',
  },

  selectedButton: {
    backgroundColor: colorNameToHex('dimgrey'),
  },

  label: {
    color: colorNameToHex('regentgray'),
    fontWeight: 600,
    fontSize: 12,
    marginLeft: 5,
  },

  labelSelected: {
    color: colorNameToHex('white'),
    fontWeight: 600,
    fontSize: 12,
    marginLeft: 5,
  },
};

export default styles;
