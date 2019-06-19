import { colorNameToHex } from '../../../utils/color';

const styles = {
  container: {
    width: '100%',
    height: 70,
    backgroundColor: colorNameToHex('ebonyclay'),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    zIndex: 1,
  },

  userMenu: {
    position: 'absolute',
    right: 30,
  },
};

export default styles;
