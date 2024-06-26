import { colorNameToHex } from '../../../../utils/color';

const styles = {
  selectContainer: {
    width: '100%',
    height: 36,
    flexDirection: 'row',
    backgroundColor: colorNameToHex('ebonyclay'),
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderWidth: 1,
    cursor: 'pointer',
    position: 'relative',
    paddingLeft: 15,
    paddingTop: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  selectSimple: {
    border: 'none',
    background: 'none',
  },

  selectedLabel: {
    textTransform: 'capitalize',
    marginRight: 10,
    color: colorNameToHex('regentgray'),
  },

  listViewContainer: {
    top: 34,
    left: -1,
    position: 'absolute',
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    minWidth: 'calc(100% + 2px)',
  },

  listElem: {
    width: '100%',
    height: 37,
    backgroundColor: colorNameToHex('ebonyclay'),
  },

  elemLabel: {
    fontSize: 14,
    fontWeight: 600,
    color: colorNameToHex('white'),
    marginLeft: 15,
    marginRight: 15,
    marginTop: 9,
    textTransform: 'capitalize',
  },

  elemLabelSelect: {
    color: colorNameToHex('dodgerblue'),
  },

  customSelect: {
    marginRight: 9,
  },
};

export default styles;
