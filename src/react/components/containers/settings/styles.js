import { colorNameToHex } from '../../../utils/color';

const styles = {
  container: {
    width: '100%',
    maxWidth: 1110,
    height: 200,
    justifySelf: 'center',
    alignSelf: 'center',
    paddingTop: 30,
  },

  title: {
    fontSize: 24,
    color: colorNameToHex('white'),
    fontWeight: 600,
  },

  mbTitle: {
    fontSize: 24,
    color: colorNameToHex('white'),
    fontWeight: 600,
    textAlign: 'center',
  },

  contentContainer: {
    marginTop: 30,
    flexDirection: 'row',
  },

  mbContentContainer: {
    marginTop: 30,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  mbSettingsDataContainer: {
    marginTop: 30,
    width: '100%',
  },

  settingsDataContainer: {
    marginLeft: 30,
    width: '100%',
  },
};

export default styles;
