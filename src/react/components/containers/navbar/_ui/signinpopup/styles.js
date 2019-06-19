import { colorNameToHex } from "../../../../../utils/color";

const styles = {
  title: {
    fontSize: 24,
  },

  fieldsContainer: {
    width: '100%',
    marginTop: 30,
    marginBottom: 64,
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

  resetPwdContainer: {
    marginTop: 20,
    alignSelf: 'flex-start',
  },
};

export default styles;
