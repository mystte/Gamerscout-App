import { colorNameToHex } from '../../../../../../../../../utils/color';

const styles = {
  container: {
    flexDirection: 'row',
    width: '100%',
    height: 31,
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 20,
  },

  icon: {
    borderColor: colorNameToHex('curiousblue'),
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '50%',
  },

  gaugeContainer: {
    width: '90%',
    marginLeft: 10,
    marginRight: 10,
    height: 31,
    justifyContent: 'flex-end',
    alignItems: 'flex-start',
  },

  gauge: {
    width: '100%',
    position: 'relative',
  },

  name: {
    fontWeight: 600,
    fontSize: 12,
    color: colorNameToHex('white'),
  },

  greyZone: {
    height: 3,
    backgroundColor: colorNameToHex('fiord'),
    borderRadius: 2,
    width: '100%',
  },

  blueZone: {
    height: 3,
    width: 0,
    backgroundColor: colorNameToHex('curiousblue'),
    borderRadius: 2,
    position: 'absolute',
    top: 0,
    left: 0,
  },

  ratio: {
    fontWeight: 600,
    fontSize: 12,
    color: colorNameToHex('white'),
    marginBottom: 12,
  },
};

export default styles;
