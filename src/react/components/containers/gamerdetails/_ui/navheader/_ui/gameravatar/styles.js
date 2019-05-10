import { colorNameToHex, hexToRgbA } from '../../../../../../../utils/color';

colorNameToHex

const styles = {
  container: {
    flexDirection: 'row',
    position: 'relative',
  },

  iconContainer: {
    marginRight: 20,
  },

  icon: {
    width: 65,
    height: 65,
    borderRadius: 50,
  },

  level: {
    width: 20,
    height: 20,
    fontSize: 8,
    backgroundColor: colorNameToHex('darkgrey'),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colorNameToHex('darkslategrey'),
    borderRadius: '50%',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 1,
    left: 45,
  },

  gamertagContainer: {
    flexDirection: 'column',
  },

  gamertag: {
    fontSize: 24,
    fontWeight: 600,
    height: 31,
  },

  region: {
    fontSize: 14,
    color: hexToRgbA('ffffff', 0.5),
    height: 19,
    textTransform: 'uppercase',
  },
};

export default styles;