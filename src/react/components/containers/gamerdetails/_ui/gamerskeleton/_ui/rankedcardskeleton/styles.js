import { colorNameToHex } from '../../../../../../../utils/color';

const styles = {
  container: {
    maxWidth: 350,
    minWidth: 279,
    width: '31vw',
    padding: 15,
    height: 160,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
  },

  content: {
    marginTop: 36,
    flexDirection: 'row',
  },

  rankedData: {
    marginLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },

  firstRect: {
    marginBottom: 8,
  },
};

export default styles;
