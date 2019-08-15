import {
  colorNameToHex,
  colorNameToRgba,
} from '../../../../../../../../utils/color';

const styles = {
  container: {
    width: '50%',
    height: 115,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
  },

  buttonContainer: {
    position: 'absolute',
    right: 0,
    top: 0,
  },

  lastContainer: {
    marginRight: 10,
  },

  header: {
    margin: 15,
    marginBottom: 0,
    flexDirection: 'row',
    position: 'relative',
  },

  title: {
    fontWeight: 600,
    fontSize: 12,
    textTransform: 'uppercase',
    color: colorNameToHex('regentgray'),
  },

  count: {
    fontSize: 36,
    marginLeft: 15,
    marginTop: 30,
    fontWeight: 400,
    color: colorNameToRgba('white', 0.75),
  },
};

export default styles;
