import { colorNameToHex } from '../../../utils/color';

const styles = {
  container: {
    flexDirection: 'column',
  },

  headerContainer: {
    width: '100%',
    minHeight: 500,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },

  title: {
    fontWeight: 600,
    fontSize: 40,
    margin: 10,
  },

  homeBg: {
    width: '100%',
    position: 'absolute',
    top: 0,
    left: '50%',
    transform: 'translate(-50%, 0)',
    zIndex: -1,
  },

  desc: {
    fontSize: 12,
    marginTop: 30,
  },

  statsBandeau: {
    position: 'relative',
    width: '100%',
    height: 200,
    backgroundColor: colorNameToHex('mirage'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  createAccountContainer: {
    backgroundColor: colorNameToHex('mirage2'),
    width: '100%',
    height: 298,
    alignItems: 'center',
    justifyContent: 'center',
  },

  createAccountLabel: {
    marginBottom: 50,
    fontSize: 30,
    fontWeight: 600,
    width: 379,
    textAlign: 'center',
    lineHeight: 1.2,
  },

  createAccountBtn: {
    width: 200,
  },

  statTitle: {
    fontSize: 24,
    fontWeight: 600,
    marginTop: 46,
  },

  approvalsContainer: {
    flexDirection: 'column',
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '5%',
    marginTop: -140,
  },

  approvalsPictContainer: {
    flexDirection: 'row',
  },

  separator: {
    width: 10,
  },

  featuredGamersContainers: {
    width: '100%',
    height: 500,
    backgroundColor: colorNameToHex('mirage'),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  playersListContainer: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },

  ftTitle: {
    fontWeight: 600,
    fontSize: 24,
    marginTop: 50,
  },

  playerList: {
    marginRight: '3%',
    marginLeft: '3%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  playerListTitle: {
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    fontWeight: 600,
    marginBottom: 20,
  },
};

export default styles;
