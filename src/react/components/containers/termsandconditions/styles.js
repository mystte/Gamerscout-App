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
    borderBottom: `1px solid ${colorNameToHex('dodgerblue')}`,
    cursor: 'pointer',
  },
  link: {
    color: colorNameToHex('regentgray'),
    textDecoration: 'none',
    marginRight: 20,
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
    width: '100%',
    maxWidth: 820,
    paddingRight: 20,
    paddingLeft: 20,
    textAlign: 'justify',
    color: colorNameToRgba('white', 0.7),
    fontSize: 16,
    marginBottom: 150,
  },
};

export default styles;
