import { colorNameToHex } from '../../../../../utils/color';

const styles = {
  container: {
    width: 1110,
    height: 265,
    backgroundColor: colorNameToHex('ebonyclay'),
  },

  topBannerContainer: {
    position: 'relative',
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
  },
};

export default styles;