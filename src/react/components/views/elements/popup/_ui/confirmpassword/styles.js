import { colorNameToHex, colorNameToRgba } from "../../../../../../utils/color";

const styles = {
  title: {
    fontSize: 24,
    color: colorNameToHex('white'),
    marginBottom: 30,
  },

  desc: {
    fontSize: 14,
    color: colorNameToRgba('white', 0.75),
    marginBottom: 20,
  },

  submit: {
    marginTop: 30,
    width: 135,
    alignSelf: 'flex-end',
  },
};

export default styles;
