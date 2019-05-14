import { colorNameToHex } from "../../../../../../../../utils/color";

const styles = {
  container: {
    marginTop: 30,
    marginRight: 15,
    marginLeft: 15,
  },

  header: {
    flexDirection: 'row',
    width: '100%',
  },

  positionsFilter: {
    width: '50%',
    marginRight: 10,
  },

  championsFilter: {
    width: '50%',
  },

  content: {
    maxWidth: 350,
    minWidth: 279,
    width: '31vw',
    height: 119,
    backgroundColor: colorNameToHex('ebonyclay'),
    marginTop: 5,
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
  },

  title: {
    width: '100%',
    margin: 15,
    marginTop: 9,
    marginBottom: 0,
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: 12,
    color: colorNameToHex('regentgray'),
  },
};

export default styles;