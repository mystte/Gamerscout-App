import { colorNameToRgba, colorNameToHex } from '../../../utils/color';

const styles = {
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontWeight: '600',
    fontSize: 24,
    color: colorNameToHex('white'),
    alignSelf: 'flex-start',
    marginLeft: '9vw',
    marginTop: 30,
  },
  selected: {
    color: colorNameToHex('white'),
    marginRight: 20,
    borderBottom: `1px solid ${colorNameToHex('dodgerblue')}`,
    cursor: 'pointer',
  },
  link: {
    color: colorNameToHex('regentgray'),
    textDecoration: 'none',
  },
  tabContainer: {
    flexDirection: 'row',
    textTransform: 'uppercase',
    fontWeight: 600,
    fontSize: 12,
    color: colorNameToHex('regentgray'),
    marginTop: 20,
    marginBottom: 20,
  },
  textBloc: {
    width: 820,
    textAlign: 'justify',
    color: colorNameToRgba('white', 0.7),
    fontSize: 16,
    marginBottom: 150,
  },
};

export default styles;
