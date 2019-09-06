import { colorNameToHex } from '../../../../../../../../../../utils/color';

const styles = {
  container: {
    width: '100%',
    height: 130,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 1,
    padding: 15,
  },

  winContainer: {
    backgroundColor: colorNameToHex('pickledbluewood'),
    borderColor: colorNameToHex('astronaut'),
  },

  lossContainer: {
    backgroundColor: colorNameToHex('ebonydark'),
    borderColor: colorNameToHex('matterhorn'),
  },

  topContainer: {
    flexDirection: 'row',
  },

  bottomContainer: {
    flexDirection: 'row',
    marginTop: 15,
  },

  gameType: {
    marginRight: 20,
    fontSize: 12,
    fontWeight: 600,
    color: colorNameToHex('white'),
  },

  time: {
    fontSize: 12,
    color: colorNameToHex('regentgray'),
  },

  dotSeparator: {
    marginLeft: 5,
    marginRight: 5,
    color: colorNameToHex('regentgray'),
    fontSize: 21,
    lineHeight: 1,
    position: 'relative',
    top: -5,
  },

  killsContainer: {
    marginLeft: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },

  kills: {
    flexDirection: 'row',
  },

  kdaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  csContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 60,
  },

  kdaTitle: {
    fontWeight: 600,
    color: colorNameToHex('white'),
  },

  kdaLabel: {
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
    marginLeft: 4,
  },

  csTitle: {
    fontWeight: 600,
    color: colorNameToHex('white'),
  },

  csLabel: {
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
    marginLeft: 4,
  },

  textData: {
    fontSize: 16,
    fontWeight: 600,
  },

  slashSeparator: {
    fontSize: 16,
    fontWeight: 600,
    marginRight: 4,
    marginLeft: 4,
  },
};

export default styles;
