import { colorNameToHex, colorNameToRgba } from '../../../../../utils/color';

const styles = {
  container: {
    width: 268,
  },

  title: {
    color: colorNameToHex('white'),
    fontSize: 24,
    marginBottom: 30,
  },

  desc: {
    fontSize: 14,
    color: colorNameToRgba('white', 0.7),
    marginBottom: 30,
  },

  fieldsContainer: {
    marginBottom: 165,
  },

  buttonsContainer: {
    marginBottom: 20,
  },

  backContainer: {
    alignItems: 'flex-start',
  },
};

export default styles;
