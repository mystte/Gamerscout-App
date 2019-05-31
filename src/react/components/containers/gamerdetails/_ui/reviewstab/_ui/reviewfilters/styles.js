import { colorNameToHex } from "../../../../../../../utils/color";

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },

  border: {
    width: '70%',
    height: 1,
    backgroundColor: colorNameToHex('dimgrey'),
  },

  showFilter: {
    width: 100,
    flexDirection: 'row',
  },
};

export default styles;
