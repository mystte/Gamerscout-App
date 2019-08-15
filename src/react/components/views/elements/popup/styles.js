import { colorNameToHex, colorNameToRgba } from '../../../../utils/color';

const styles = {
  container: {
    minWidth: 340,
    minHeight: 201,
    backgroundColor: colorNameToHex('darkgrey'),
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderColor: colorNameToHex('dimgrey'),
    borderWidth: 1,
    borderStyle: 'solid',
    padding: 30,
    borderRadius: 1,
  },

  popupBackground: {
    width: '100vw',
    height: '100vh',
    backgroundColor: colorNameToRgba('bunker', 0.8),
    position: 'fixed',
    top: 0,
    bottom: 0,
    zIndex: 2,
  },

  closeContainer: {
    alignSelf: 'flex-end',
    position: 'absolute',
    right: 15,
    top: 15,
  },
};

export default styles;
