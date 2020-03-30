import { colorNameToHex } from '../../../../../../../../utils/color';

const styles = {
  container: {
    width: '100%',
    height: '100%',
  },

  historyCardContainer: {
    marginBottom: 10,
  },

  zeroStateContainer: {
    width: '100%',
    height: 265,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    padding: 15,
  },

  iconContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontWeight: 600,
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    textTransform: 'uppercase',
  },

  showMoreContainer: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 26,
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'center',
  },

  showMoreLabel: {
    fontWeight: 600,
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    textTransform: 'uppercase',
    marginRight: 26,
    marginLeft: 26,
    whiteSpace: 'nowrap',
  },

  separator: {
    height: 1,
    width: '42%',
    backgroundColor: colorNameToHex('dimgrey'),
  },
};

export default styles;
