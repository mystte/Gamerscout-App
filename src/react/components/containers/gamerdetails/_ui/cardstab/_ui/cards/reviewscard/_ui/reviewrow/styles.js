import { colorNameToHex } from '../../../../../../../../../../utils/color';

const styles = {
  container: {
    height: 60,
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
    borderBottomColor: colorNameToHex('dimgrey'),
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  reviewerName: {
    marginRight: 15,
  },

  comment: {
    color: colorNameToHex('white'),
    fontSize: 12,
    fontWeight: 400,
    width: '100%',
    height: 12,
  },
};

export default styles;
