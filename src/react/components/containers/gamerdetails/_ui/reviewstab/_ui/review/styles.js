import {
  colorNameToHex,
  colorNameToRgba,
} from '../../../../../../../utils/color';

const styles = {
  container: {
    minHeight: 148,
    width: '100%',
    marginBottom: 18,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    padding: 15,
    paddingBottom: 10,
  },

  top: {
    minHeight: 84,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  gamerContainer: {
    marginLeft: 10,
  },

  name: {
    fontSize: 14,
    fontWeight: 600,
    color: colorNameToHex('white'),
    textTransform: 'capitalize',
  },

  date: {
    fontSize: 12,
    fontWeight: 400,
    color: colorNameToHex('regentgray'),
  },

  commentContainer: {
    marginTop: 10,
    marginBottom: 16,
  },

  bottom: {
    borderTopWidth: 1,
    borderTopColor: colorNameToHex('dimgrey'),
    borderTopStyle: 'solid',
    height: 38,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },

  reviewType: {
    color: colorNameToHex('white'),
    fontSize: 12,
    fontWeight: 600,
    width: 95,
    height: 20,
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 2,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  approval: {
    borderColor: colorNameToHex('dodgerblue'),
    backgroundColor: colorNameToRgba('dodgerblue', 0.1),
  },

  disapproval: {
    borderColor: colorNameToHex('nightshadz'),
    backgroundColor: colorNameToRgba('nightshadz', 0.1),
  },

  attributeIcon: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: '50%',
    position: 'absolute',
    top: 10,
    left: 110,
    backgroundColor: colorNameToHex('ebonyclay'),
  },

  iconGood: {
    borderColor: colorNameToHex('dodgerblue'),
  },

  iconBad: {
    borderColor: colorNameToHex('nightshadz'),
  },
};

export default styles;
