import { colorNameToRgba, colorNameToHex } from '../../../../../utils/color';

const styles = {
  container: {
    width: 380,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },

  input: {
    width: '100%',
    height: '100%',
    backgroundColor: colorNameToRgba('darkgrey', 0.8),
    borderWidth: 1,
    borderColor: colorNameToRgba('white', 0.5),
    borderStyle: 'solid',
    borderRadius: 1,
    padding: 15,
    color: colorNameToHex('white'),
    fontWeight: 600,
    fontSize: 14,
  },

  lbl: {
    fontSize: 14,
    fontWeight: 600,
  },

  submit: {
    width: 130,
    height: '100%',
    background: 'linear-gradient(0deg, #1991EB 2.22%, #2DA1F8 98.44%)',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
};

export default styles;
