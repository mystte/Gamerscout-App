import { colorNameToHex } from '../../../../../../../../../utils/color';

const styles = {
  container: {
    // width: 245,
    height: 233,
    position: 'absolute',
    top: 37,
    left: 10,
    backgroundColor: colorNameToHex('ebonyclay'),
    overflowY: 'auto',
    border: `1px solid ${colorNameToHex('dimgrey')}`,
    cursor: 'pointer',
    zIndex: 1,
  },

  attrItem: {
    width: '100%',
    minHeight: 37,
    height: 37,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: 7,
  },

  icon: {
    borderRadius: '50%',
  },

  tick: {
    position: 'absolute',
    right: 15,
  },

  separator: {
    borderBottom: `1px solid ${colorNameToHex('dimgrey')}`,
    height: 2,
  },

  attrName: {
    fontSize: 14,
    fontWeight: 600,
    color: colorNameToHex('white'),
    textTransform: 'capitalize',
    marginLeft: 12,
  },

  selected: {
    color: colorNameToHex('dodgerblue'),
  },
};

export default styles;
