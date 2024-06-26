import { colorNameToHex } from '../../../../../utils/color';

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
    height: 100,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderRadius: 1,
    paddingTop: 32,
    paddingLeft: 30,
    position: 'relative',
  },

  inputDataContainer: {
    overflow: 'hidden',
  },

  dataContainerEditMode: {
    borderColor: colorNameToHex('dodgerblue'),
    height: 215,
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

  inputContainer: {
    width: 245,
    marginBottom: 20,
    marginTop: 20,
  },

  cancelButtonContainer: {
    width: 100,
    marginRight: 10,
  },

  topContainer: {
    cursor: 'pointer',
  },

  submitlButtonsContainer: {
    flexDirection: 'row',
  },
};

export default styles;
