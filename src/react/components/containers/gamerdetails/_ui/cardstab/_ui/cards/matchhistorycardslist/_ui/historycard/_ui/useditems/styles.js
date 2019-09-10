import { colorNameToHex } from '../../../../../../../../../../../../utils/color';

const styles = {
  container: {
    width: 106,
    height: 53,
    marginLeft: 60,
    flexDirection: 'row',
  },

  itemsContainer: {
    flexDirection: 'column',
  },

  itemPlaceHolder: {
    backgroundColor: colorNameToHex('darkgrey'),
    opacity: 0.4,
  },

  wardContainer: {
    justifyContent: 'center',
  },

  topContainer: {
    flexDirection: 'row',
  },

  bottomContainer: {
    flexDirection: 'row',
  },

  itemImg: {
    width: 25,
    height: 25,
    marginRight: 2,
    marginTop: 3,
    borderColor: colorNameToHex('darkslategrey'),
    borderWidth: 1,
    borderStyle: 'solid',
  },
};

export default styles;
