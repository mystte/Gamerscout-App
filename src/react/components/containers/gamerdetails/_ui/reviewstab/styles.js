import { colorNameToHex } from '../../../../../utils/color';

const styles = {
  container: {
    flexDirection: 'row',
    width: '100%',
    maxWidth: 1110,
    marginTop: 30,
  },

  statsContainer: {
    width: '32%',
    maxWidth: 350,
    minWidth: 260,
    marginRight: 30,
  },

  sectionContainer: {
    width: '70%',
    maxWidth: 730,
    backgroundColor: colorNameToHex('blue'),
  },

  approvalsContainer: {
    flexDirection: 'row',
  },
};

export default styles;
