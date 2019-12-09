import { colorNameToHex } from '../../../utils/color';

const styles = {
  container: {
    flexDirection: 'column',
  },

  headerContainer: {
    width: '100%',
    height: '100vh',
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
    width: 1440,
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
    backgroundColor: colorNameToHex('mirage2'),
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
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
};

export default styles;
