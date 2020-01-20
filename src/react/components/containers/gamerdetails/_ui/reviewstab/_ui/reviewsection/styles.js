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
    width: 86,
    flexDirection: 'row',
  },

  errorMessage: {
    position: 'absolute',
    left: 15,
    color: colorNameToHex('cinnabar'),
    fontSize: 12,
    height: 19,
    marginTop: 3,
    fontWeight: 600,
  },
};

export default styles;
