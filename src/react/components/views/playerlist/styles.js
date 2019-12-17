import { colorNameToHex, colorNameToRgba } from '../../../utils/color';

const styles = {
  container: {
    flexDirection: 'column',
  },

  playerCardContainer: {
    position: 'relative',
    cursor: 'pointer',
    width: 318,
    height: 68,
    backgroundColor: colorNameToHex('ebonyclay'),
    border: `1px solid ${colorNameToHex('dimgrey')}`,
    borderTop: 'none',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 15,
  },

  firstPlayerCard: {
    borderTop: `1px solid ${colorNameToHex('dimgrey')}`,
  },

  gamertag: {
    fontWeight: 600,
    color: colorNameToHex('white'),
    fontSize: 14,
  },

  region: {
    fontSize: 12,
    color: colorNameToRgba('white', 0.5),
  },

  profileImg: {
    borderRadius: '50%',
    marginRight: 12,
  },

  likesContainer: {
    position: 'absolute',
    right: 15,
  },

  rep: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  repNum: {
    fontSize: 12,
    fontWeight: 600,
    color: colorNameToHex('white'),
    marginRight: 5,
  },

  flame: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  flameNum: {
    fontSize: 12,
    fontWeight: 600,
    color: colorNameToHex('white'),
    marginRight: 5,
  },

};

export default styles;
