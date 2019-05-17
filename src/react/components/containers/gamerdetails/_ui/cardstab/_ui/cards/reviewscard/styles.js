import { colorNameToHex } from "../../../../../../../../utils/color";

const styles = {
  container: {
    maxWidth: 350,
    minWidth: 279,
    width: '31vw',
    height: 274,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
  },

  header: {
    margin: 15,
    marginBottom: 0,
    flexDirection: 'row',
    position: 'relative',
  },

  title: {
    fontSize: 12,
    textTransform: 'uppercase',
    color: colorNameToHex('regentgray'),
    fontWeight: 600,
  },

  viewAll: {
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    fontWeight: 200,
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 0,
  },

  footer: {
    marginLeft: 15,
    marginRight: 15,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 60,
  },

  actionLabel: {
    textTransform: 'uppercase',
    marginLeft: 15,
    fontSize: 12,
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
  },
};

export default styles;