import { colorNameToHex } from '../../../utils/color';

const styles = {
  container: {
    width: '100%',
    height: 70,
    backgroundColor: colorNameToHex('ebonyclay'),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingLeft: 30,
    paddingRight: 30,
    zIndex: 1,
  },

  mbContainer: {
    height: 120,
    backgroundColor: colorNameToHex('ebonyclay'),
    alignItems: 'center',
  },

  userMenu: {
    position: 'absolute',
    right: 30,
  },

  mbLink: {
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mbTopContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  mbUserMenuContainer: {
    marginLeft: 10,
  },
};

export default styles;
