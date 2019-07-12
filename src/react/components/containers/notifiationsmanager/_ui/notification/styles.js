import { colorNameToHex } from "../../../../../utils/color";

const styles = {
  container: {
    flexDirection: 'row',
    paddingLeft: 11,
    paddingRight: 11,
    paddingTop: 9,
    paddingBottom: 9,
    justifyContent: 'flex-start',
    alignItems: 'center',
    position: 'relative',
  },

  title: {
    marginLeft: 12,
    marginRight: 20,
  },

  close: {
    position: 'absolute',
    top: 14,
    right: 14,
  },

  NOTIFICATION_DEFAULT: {
    backgroundColor: colorNameToHex('dodgerblue'),
  },

  NOTIFICATION_WARNING: {

  },

  NOTIFICATION_ALERT: {

  },
};

export default styles;
