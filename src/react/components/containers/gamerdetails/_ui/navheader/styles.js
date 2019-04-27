import { colorNameToHex } from '../../../../../utils/color';

const styles = {
  container: {
    maxWidth: 1110,
    width: '100%',
    height: 265,
    backgroundColor: colorNameToHex('ebonyclay'),
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
  },
};

export default styles;