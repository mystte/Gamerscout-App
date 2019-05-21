import { colorNameToHex } from "../../../../../../../utils/color";

const styles = {
  container: {
    marginRight: 30,
    marginLeft: 30,
    minWidth: 350,
  },

  header: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 5,
  },

  bottomContainer: {
    width: '100%',
    height: 119,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    padding: 15,
    paddingTop: 9,
  },

  content: {
    marginTop: 20,
    flexDirection: 'row',
  },

  right: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topRect: {
    marginBottom: 8,
  },

  dropdown1: {
    width: '50%',
    marginRight: 5,
  },

  dropdown2: {
    width: '50%',
    marginLeft: 5,
  },
};

export default styles;
