import {
  colorNameToHex,
  colorNameToRgba,
} from '../../../../../../../utils/color';

const styles = {
  container: {
    fontSize: 14,
    fontWeight: 600,
    color: colorNameToRgba('white', 0.5),
    marginBottom: 15,
    cursor: 'pointer',
  },

  selected: {
    color: colorNameToHex('white'),
  },
};

export default styles;
