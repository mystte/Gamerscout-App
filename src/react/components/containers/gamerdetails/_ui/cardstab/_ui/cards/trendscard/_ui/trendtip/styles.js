import { colorNameToHex } from '../../../../../../../../../../utils/color';

const styles = {
  container: {
    width: 117,
    height: 45,
    backgroundColor: colorNameToHex('white'),
    paddingTop: 5,
    paddingLeft: 10,
    borderRadius: 3,
  },

  kdaRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    color: colorNameToHex('abbey'),
    fontSize: 11,
    fontWeight: 600,
    width: '100%',
  },

  circleLegend: {
    marginRight: 5,
    borderRadius: '50%',
    width: 8,
    height: 8,
  },

  avgValue: {
    position: 'absolute',
    right: 10,
  },
};

export default styles;
