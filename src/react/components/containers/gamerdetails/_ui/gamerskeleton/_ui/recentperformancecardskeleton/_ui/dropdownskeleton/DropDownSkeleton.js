import React from 'react';

import { colorNameToHex } from '../../../../../../../../../utils/color';
import SVGIcon from '../../../../../../../../views/elements/svgicon/SVGIcon';

import Rectangle from '../../../rectangle/Rectangle';

const styles = {
  container: {
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderWidth: 1,
    width: '100%',
    height: 36,
    backgroundColor: colorNameToHex('ebonyclay'),
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },

  rect: {
    marginRight: 22,
  },
};

const DropdownSkeleton = () => (
  (
    <div style={styles.container}>
      <div style={styles.rect}><Rectangle width={120} height={20} /></div>
      <SVGIcon width={7} height={4} name={'arrow-down'} />
    </div>
  )
);

export default DropdownSkeleton;
