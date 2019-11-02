import { colorNameToHex } from '../../../../../../../../utils/color';

const styles = {
  container: {
    marginTop: 30,
    marginRight: 15,
    marginLeft: 15,
  },

  header: {
    flexDirection: 'row',
  },

  positionsFilter: {
    width: '50%',
    marginRight: 10,
  },

  donutContainer: {
    width: 55,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  winsPercentage: {
    fontWeight: 600,
    fontSize: 14,
    color: colorNameToHex('white'),
    position: 'absolute',
    top: 29,
    left: 16,
  },

  winsLabel: {
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    position: 'absolute',
    bottom: 0,
  },

  championsFilter: {
    width: '50%',
  },

  content: {
    maxWidth: 350,
    minWidth: 279,
    width: '31vw',
    height: 119,
    backgroundColor: colorNameToHex('ebonyclay'),
    marginTop: 5,
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
  },

  title: {
    width: '100%',
    margin: 15,
    marginTop: 9,
    marginBottom: 0,
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: 12,
    color: colorNameToHex('regentgray'),
  },

  dataContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  kdaContainer: {
    flexDirection: 'column',
    marginLeft: 60,
    alignItems: 'center',
  },

  numbers: {
    flexDirection: 'row',
  },

  kdaNum: {
    fontSize: 16,
    fontWeight: 600,
    color: colorNameToHex('white'),
    marginRight: 4,
  },

  slash: {
    color: colorNameToHex('regentgray'),
    fontWeight: 600,
    fontSize: 12,
    marginRight: 4,
  },

  kdaLblContainer: {
    flexDirection: 'row',
    bottom: -3,
  },

  kda: {
    fontSize: 12,
    fontWeight: 600,
    marginRight: 2,
    color: colorNameToHex('white'),
  },

  kdaLbl: {
    fontSize: 12,
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
    textTransform: 'uppercase',
  },

  csContainer: {
    flexDirection: 'row',
    marginLeft: 46,
  },

  cs: {
    fontSize: 12,
    fontWeight: 600,
    marginRight: 2,
    color: colorNameToHex('white'),
  },

  csLbl: {
    fontSize: 12,
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
    textTransform: 'uppercase',
  },
};

export default styles;
