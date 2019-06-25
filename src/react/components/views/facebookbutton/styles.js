import { colorNameToHex } from "../../../utils/color";

const styles = {
  button: {
    background: `linear-gradient(180deg, #516173 0%, #3B4857 100%)`,
    width: '100%',
    height: 36,
    justifyContent: 'center',
    fontSize: 14,
    fontWeight: 600,
    color: colorNameToHex('white'),
    borderRadius: 1,
    border: 'none',
    flexDirection: 'row',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },
};

export default styles;
