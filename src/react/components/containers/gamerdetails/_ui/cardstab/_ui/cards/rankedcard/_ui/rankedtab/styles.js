import { colorNameToHex } from '../../../../../../../../../../utils/color';

const styles = {
  container: {

  },

  dataContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginLeft: 8,
  },

  cardContent: {
    flexDirection: 'row',
  },

  tierContainer: {
    flexDirection: 'row',
    marginBottom: 11,
  },

  tier: {
    fontSize: 16,
    textTransform: 'capitalize',
    fontWeight: 600,
  },

  separator: {
    marginRight: 3,
    marginLeft: 3,
    fontWeight: 600,
  },

  rankInNumber: {
    fontSize: 16,
    marginRight: 3,
    marginLeft: 3,
    fontWeight: 600,
  },

  points: {
    fontSize: 12,
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
  },

  winRateContainer: {
    flexDirection: 'row',
  },

  wins: {
    fontWeight: 600,
  },

  losses: {
    marginRight: 3,
    fontWeight: 600,
  },

  winrate: {
    fontSize: 12,
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
  },
};

export default styles;
