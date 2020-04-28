import { colorNameToHex } from '../../../../../../../utils/color';

const styles = {
  container: {
    width: '100%',
    minHeight: 362,
    backgroundColor: colorNameToHex('ebonyclay'),
    border: `1px solid ${colorNameToHex('dimgrey')}`,
    borderRadius: 1,
  },

  header: {
    width: '100%',
    height: 56,
    borderBottom: `1px solid ${colorNameToHex('dimgrey')}`,
    justifyContent: 'center',
    alignItems: 'center',
  },

  title: {
    fontSize: 14,
    fontWeight: 600,
  },

  avatar: {
    width: 30,
    height: 30,
    borderRadius: '50%',
    marginRight: 10,
  },

  bannerHeader: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottom: `1px solid ${colorNameToHex('dimgrey')}`,
  },

  championName: {
    fontWeight: 600,
    fontSize: 14,
    color: colorNameToHex('white'),
  },

  perksContainer: {
    flexDirection: 'row',
    position: 'absolute',
    right: 30,
  },

  perks: {
    width: 20,
    height: 20,
    borderRadius: '50%',
  },

  positionDesc: {
    fontSize: 14,
    marginLeft: 30,
  },

  rowContainer: {
    height: 56,
    borderBottom: `1px solid ${colorNameToHex('dimgrey')}`,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    position: 'relative',
  },

  summoner: {
    fontSize: 14,
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
    width: '50%',
    paddingLeft: 30,
  },

  position: {
    fontSize: 14,
    fontWeight: 600,
    color: colorNameToHex('regentgray'),
    width: '50%',
    textAlign: 'end',
    paddingRight: 30,
  },
};

export default styles;
