import { colorNameToHex } from '../../../../utils/color';

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  },

  checkbox: {
    width: 16,
    height: 16,
    backgroundColor: colorNameToHex('mirage'),
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorNameToHex('dimgrey'),
    borderRadius: 1,
  },

  label: {
    marginLeft: 10,
    fontSize: 14,
  },

  selectedContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: colorNameToHex('apple'),
    justifyContent: 'center',
    alignItems: 'center',
  },

  disabled: {
    backgroundColor: 'none',
    opacity: 0.5,
  },

  selected: {
    fontWeight: 600,
  },
};

export default styles;
