import { colorNameToHex, colorNameToRgba } from '../../../../../utils/color';

const styles = {
  container: {
    width: 280,
  },

  title: {
    fontSize: 24,
  },

  inputSeparator: {
    marginTop: 10,
  },

  buttonsSeparator: {
    marginTop: 20,
    marginBottom: 20,
    width: '100%',
    height: 1,
    backgroundColor: colorNameToHex('oxfordblue'),
  },

  fieldsContainer: {
    width: '100%',
    marginTop: 30,
    marginBottom: 64,
  },

  buttonsContainer: {
    marginBottom: 20,
  },

  agreementButton: {
    display: 'inline',
    color: colorNameToHex('dodgerblue'),
    cursor: 'pointer',
  },

  aggreementContainer: {
    display: 'inline',
    marginBottom: 21,
  },

  signinContainer: {
    display: 'inline',
    color: colorNameToRgba('white', 0.5),
  },

  signin: {
    display: 'inline',
    color: colorNameToHex('dodgerblue'),
    cursor: 'pointer',
    marginLeft: 3,
  },
};

export default styles;
