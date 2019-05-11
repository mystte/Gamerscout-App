import { colorNameToHex } from "../../../../../../../../../../utils/color";

colorNameToHex

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
  },

  separator: {
    marginRight: 3,
    marginLeft: 3,
  },

  rankInNumber: {
    fontSize: 16,
    marginRight: 3,
    marginLeft: 3,
  },

  points: {
    fontSize: 12,
    color: colorNameToHex('regentgray'),
  },

  winRateContainer: {
    flexDirection: 'row',
  },

  losses: {
    marginRight: 3,
  },

  winrate: {
    fontSize: 12,
    color: colorNameToHex('regentgray'),
  },
};

export default styles;