import { colorNameToHex } from '../../../utils/color';

const styles = {
  container: {
    width: 28,
    height: 28,
    backgroundColor: colorNameToHex('cornflower'),
    borderRadius: '50%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  letter: {
    textTransform: 'uppercase',
    fontSize: 12,
    fontWeight: 400,
  },
};

export default styles;
