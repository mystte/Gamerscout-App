import { colorNameToHex } from '../../../utils/color';

const styles = {
  container: {
    flexDirection: 'column',
  },

  playerCardContainer: {
    cursor: 'pointer',
    width: 318,
    height: 68,
    backgroundColor: colorNameToHex('ebonyclay'),
    border: `1px solid ${colorNameToHex('dimgrey')}`,
    borderTop: 'none',
  },

  firstPlayerCard: {
    borderTop: `1px solid ${colorNameToHex('dimgrey')}`,
  },
};

export default styles;
