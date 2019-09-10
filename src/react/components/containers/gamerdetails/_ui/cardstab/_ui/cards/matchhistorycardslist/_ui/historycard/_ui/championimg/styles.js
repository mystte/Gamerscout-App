import { colorNameToHex } from '../../../../../../../../../../../../utils/color';

const styles = {
  container: {
    position: 'relative',
    flexDirection: 'row',
  },

  innerContentContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  championImgContainer: {
    position: 'relative',
    marginRight: 3,
  },

  champIcon: {
    width: 53,
    height: 53,
    borderRadius: '50%',
    borderStyle: 'solid',
    borderWidth: 2,
  },

  champIconWin: {
    borderColor: colorNameToHex('curiousblue'),
  },

  champIconloss: {
    borderColor: colorNameToHex('nightshadz'),
  },

  championLevel: {
    width: 20,
    height: 20,
    fontWeight: 600,
    fontSize: 12,
    color: colorNameToHex('white'),
    backgroundColor: colorNameToHex('darkgrey'),
    borderRadius: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },

  spell: {
    width: 20,
    height: 20,
    marginRight: 2,
    marginBottom: 2,
  },
};

export default styles;
