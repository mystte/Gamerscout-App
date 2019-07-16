import { colorNameToHex } from "../../../../../utils/color";

const styles = {
  addAccountContainer: {
    marginTop: 10,
    marginBottom: 20,
    flexDirection: 'row',
  },

  addLabel: {
    marginLeft: 10,
    color: colorNameToHex('dodgerblue'),
    fontWeight: 600,
  },

  container: {
    marginBottom: 30,
    cursor: 'pointer',
  },

  title: {
    textTransform: 'uppercase',
    color: colorNameToHex('regentgray'),
    marginBottom: 15,
  },

  dataContainer: {
    width: '100%',
    minHeight: 100,
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

  dataContainerEditMode: {
    borderColor: colorNameToHex('dodgerblue'),
    height: 227,
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
    color: colorNameToHex('white'),
    fontSize: 14,
    fontWeight: 600,
  },

  detailsContainer: {
    overflow: 'hidden',
  },

  emailContainer: {
    alignItems: 'flex-start',
    paddingTop: 20,
  },

  submitlButtonsContainer: {
    flexDirection: 'row',
    marginBottom: 30,
  },

  cancelButtonContainer: {
    marginRight: 10,
    width: 100,
  },

  connectedLabels: {
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    position: 'absolute',
    right: 30,
    top: 55,
  },

  submitButtonContainer: {
    width: 135,
  },
};

export default styles;
