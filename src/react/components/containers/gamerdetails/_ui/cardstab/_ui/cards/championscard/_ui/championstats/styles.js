import { colorNameToHex } from '../../../../../../../../../../utils/color';

const styles = {
  container: {

  },

  championImg: {
    width: 30,
    height: 30,
    marginRight: 5,
    borderRadius: '50%',
  },

  bottomSeparator: {
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: colorNameToHex('dimgrey'),
  },

  championRow: {
    paddingTop: 5,
    paddingBottom: 5,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  kdaContainer: {
    flexDirection: 'row',
    width: 40,
  },

  kda: {
    color: colorNameToHex('white'),
    fontSize: 12,
    fontWeight: 600,
    marginRight: 3,
  },

  kdaLbl: {
    textTransform: 'uppercase',
    color: colorNameToHex('regentgray'),
    fontSize: 12,
    fontWeight: 600,
  },

  percentage: {
    color: colorNameToHex('white'),
    fontSize: 12,
    marginLeft: 30,
    width: 30,
  },

  championName: {
    color: colorNameToHex('white'),
    fontWeight: 600,
    fontSize: 12,
    width: 89,
    marginRight: 15,
  },

  winLossesContainer: {
    fontSize: 12,
    fontWeight: 400,
    marginLeft: 30,
  },
};

export default styles;
