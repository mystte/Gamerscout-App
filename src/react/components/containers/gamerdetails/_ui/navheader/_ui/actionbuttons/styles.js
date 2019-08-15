import { colorNameToHex } from '../../../../../../../utils/color';

const styles = {
  container: {
    width: '100%',
    height: 45,
    borderTopStyle: 'solid',
    borderTopColor: colorNameToHex('dimgrey'),
    borderTopWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    width: 118,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },
};

export default styles;
