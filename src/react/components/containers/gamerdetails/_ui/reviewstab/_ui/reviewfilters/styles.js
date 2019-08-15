import { colorNameToHex } from '../../../../../../../utils/color';

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },

  border: {
    width: '100%',
    height: 1,
    backgroundColor: colorNameToHex('dimgrey'),
  },

  showFilter: {
    flexDirection: 'row',
    justifyCOntent: 'center',
    alignItems: 'center',
  },

  filterLabel: {
    marginLeft: 15,
    fontSize: 14,
    color: colorNameToHex('regentgray'),
    whiteSpace: 'nowrap',
  },
};

export default styles;
