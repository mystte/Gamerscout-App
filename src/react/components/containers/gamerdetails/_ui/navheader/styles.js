import { colorNameToHex } from '../../../../../utils/color';

const styles = {
  container: {
    maxWidth: 1110,
    width: '100%',
    height: 265,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    borderTop: 'none',
  },

  topBannerContainer: {
    position: 'relative',
    height: 220,
  },

  gamerAvatarContainer: {
    position: 'absolute',
    top: 30,
    left: 30,
  },

  reviewButtonsContainer: {
    position: 'absolute',
    bottom: 30,
    right: 30,
    width: 109,
  },
};

export default styles;
