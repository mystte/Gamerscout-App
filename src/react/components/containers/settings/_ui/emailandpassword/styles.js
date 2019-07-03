import { colorNameToHex } from "../../../../../utils/color";

const styles = {
  container: {
    marginBottom: 30,
  },

  title: {
    textTransform: 'uppercase',
    color: colorNameToHex('regentgray'),
    marginBottom: 15,
  },

  dataContainer: {
    width: '100%',
    minHeight: 100,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderStyle: 'solid',
    borderColor: colorNameToHex('dimgrey'),
    borderRadius: 1,
    paddingTop: 32,
    paddingLeft: 30,
    position: 'relative',
    borderWidth: 1,
  },

  dataContainerEmailEditMode: {
    borderColor: colorNameToHex('dodgerblue'),
  },

  dataContainerPwdEditMode: {
    borderColor: colorNameToHex('dodgerblue'),
    borderTopWidth: 1,
  },

  pwdDataContainer: {
    borderTopWidth: 0,
  },

  infoTitle: {
    color: colorNameToHex('white'),
    fontWeight: 600,
    fontSize: 14,
  },

  infoDesc: {
    fontSize: 12,
    color: colorNameToHex('regentgray'),
  },

  edit: {
    position: 'absolute',
    right: 30,
    top: 41,
    cursor: 'pointer',
    color: colorNameToHex('dodgerblue'),
    fontSize: 14,
    fontWeight: 600,
  },

  inputDataContainer: {
    marginTop: 20,
  },

  inputContainer: {
    width: 245,
    marginBottom: 20,
  },

  submitlButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  cancelButtonContainer: {
    marginRight: 10,
    width: 100,
  },

  submitButtonContainer: {
    width: 135,
  },

  inputSeparator: {
    marginBottom: 10,
  },
};

export default styles;
