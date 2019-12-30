import { colorNameToHex } from '../../../../../../../../../utils/color';

const styles = {
  attrNeutral: {
    borderRadius: '50%',
    border: `1px solid ${colorNameToHex('curiousblue')}`,
  },

  attrBad: {
    borderRadius: '50%',
    border: `1px solid ${colorNameToHex('cinnabar')}`,
  },
};

export default styles;
