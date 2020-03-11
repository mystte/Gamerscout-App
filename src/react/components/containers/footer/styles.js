import { colorNameToHex } from '../../../utils/color';

const styles = {
  container: {
    width: '100%',
    height: 213,
    backgroundColor: colorNameToHex('mirage2'),
    alignItems: 'center',
    justifyContent: 'center',
  },

  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 50,
  },

  link: {
    fontWeight: 600,
    fontSize: 16,
    color: colorNameToHex('white'),
    textDecoration: 'none',
    marginRigth: 10,
    marginLeft: 10,
  },

  socialContainer: {
    flexDirection: 'row',
  },
};

export default styles;
