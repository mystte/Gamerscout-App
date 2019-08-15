import { colorNameToHex } from '../../../../../../../../utils/color';

const styles = {
  container: {
    maxWidth: 350,
    minWidth: 279,
    width: '31vw',
    height: 119,
    backgroundColor: colorNameToHex('ebonyclay'),
    marginTop: 71,
    marginRight: 15,
    marginLeft: 15,
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
  },

  header: {
    width: '100%',
    margin: 15,
    marginBottom: 0,
  },

  title: {
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: 12,
    color: colorNameToHex('regentgray'),
  },

};

export default styles;
