import { colorNameToHex } from '../../../../../../../../../../utils/color';

const styles = {
  positionRowContainer: {
    flexDirection: 'row',
    height: 40,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  withSeparator: {
    borderBottom: '1px solid rgb(49, 61, 79)',
  },

  positionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '12%',
    width: 80,
  },

  positionTypeLabel: {
    fonstSize: 12,
    fontWeight: 600,
    marginLeft: 5,
  },

  kdaContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '9%',
    width: 40,
  },

  kda: {
    fontWeight: 600,
    fontSize: 12,
  },

  kdaLbl: {
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    marginLeft: 2,
  },

  ratioContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: '9%',
    width: 22,
  },

  slash: {
    marginLeft: 5,
    marginRight: 5,
  },

  winsLossesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    fontSize: 12,
    width: 49,
  },
};

export default styles;
