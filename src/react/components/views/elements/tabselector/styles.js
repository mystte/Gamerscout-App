import { colorNameToHex } from '../../../../utils/color';

const styles = {
  headerContainer: {
    flexDirection: 'row',
    height: 41,
  },

  headerTab: {
    marginRight: 10,
    marginLeft: 10,
    fontSize: 12,
    cursor: 'pointer',
    color: colorNameToHex('regentgray'),
    textAlign: 'center',
    paddingBottom: 5,
    textTransform: 'uppercase',
    height: 21,
  },

  selectedTab: {
    color: colorNameToHex('white'),
    borderBottomColor: colorNameToHex('dodgerblue'),
    borderBottomStyle: 'solid',
    borderBottomWidth: 1,
  },

  contentContainer: {

  },

  container: {
    margin: 15,
  },
};

export default styles;
