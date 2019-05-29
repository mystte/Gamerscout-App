import { colorNameToHex } from "../../../../../../../utils/color";

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  border: {
    width: '70%',
    height: 1,
    backgroundColor: colorNameToHex('dimgrey'),
  },

  showFilter: {
    width: 100,
  },
};

export default styles;
