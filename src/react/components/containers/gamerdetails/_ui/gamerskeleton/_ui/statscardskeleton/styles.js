import { colorNameToHex } from "../../../../../../../utils/color";

const styles = {
  container: {
    maxWidth: 350,
    minWidth: 279,
    width: '31vw',
    height: 265,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    marginBottom: 30,
    padding: 15,
  },

  rowContainer: {
    marginTop: 26,
  },

  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 11,
  },

  circle: {
    marginRight: 10,
  },

  approvalsContainer: {
    flexDirection: 'row',
  },
};

export default styles;
