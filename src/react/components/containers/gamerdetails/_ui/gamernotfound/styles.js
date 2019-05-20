import { colorNameToHex } from "../../../../../utils/color";

const styles = {
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
  },

  title1: {
    fontSize: 20,
    fontWeight: 600,
    color: colorNameToHex('white'),
    marginTop: 30,
    marginBottom: 9,
    textAlign: 'center',
  },

  title2: {
    fontSize: 14,
    fontWeight: 400,
    color: colorNameToHex('white'),
    width: 470,
    textAlign: 'center',
    marginBottom: 30,
  },

  title3: {
    fontSize: 12,
    fontWeight: 600,
    textTransform: 'uppercase',
    color: colorNameToHex('regentgray'),
  },
};

export default styles;
