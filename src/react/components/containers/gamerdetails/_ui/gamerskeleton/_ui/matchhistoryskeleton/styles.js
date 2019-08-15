import { colorNameToHex } from '../../../../../../../utils/color';

const styles = {
  container: {
    width: '100%',
    height: 130,
    backgroundColor: colorNameToHex('ebonyclay'),
    marginBottom: 10,
    padding: 15,
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
  },

  bottom: {
    marginTop: 18,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  right: {
    marginLeft: 10,
  },

  rect1: {
    marginBottom: 8,
  },
};

export default styles;
