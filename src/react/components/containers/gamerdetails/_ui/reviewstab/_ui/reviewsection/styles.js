import { colorNameToHex } from '../../../../../../../utils/color';

const styles = {
  container: {
    width: '100%',
    padding: 15,
    height: 250,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    position: 'relative',
  },

  title: {
    fontSize: 12,
    fontStyle: 'solid',
    fontWeight: '600',
    color: colorNameToHex('regentgray'),
    textTransform: 'uppercase',
  },

  reviewButton: {
    alignSelf: 'flex-end',
  },
};

export default styles;
