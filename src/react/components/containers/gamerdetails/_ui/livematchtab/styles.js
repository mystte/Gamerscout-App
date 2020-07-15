import { colorNameToHex } from '../../../../../utils/color';

const styles = {
  container: {
    width: '100%',
    maxWidth: 1108,
    marginTop: 30,
    flexDirection: 'row',
  },

  mbContainer: {
    width: '100%',
    maxWidth: 1108,
    marginTop: 30,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },

  separator: {
    width: 30,
  },

  mbSeparator: {
    height: 30,
  },

  teamContainer: {
    width: '50%',
  },

  mbTeamContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  zeroState: {
    width: '100%',
    maxWidth: 1110,
    height: 265,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: colorNameToHex('dimgrey'),
    backgroundColor: colorNameToHex('ebonyclay'),
    borderRadius: 1,
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },

  zeroStateLbl: {
    fontSize: 14,
    color: colorNameToHex('manatee'),
  },
};

export default styles;
