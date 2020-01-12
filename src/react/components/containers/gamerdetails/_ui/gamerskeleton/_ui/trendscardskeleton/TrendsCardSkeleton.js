import React from 'react';

import { colorNameToHex } from '../../../../../../../utils/color';
import Rectangle from '../rectangle/Rectangle';

const styles = {
  container: {
    maxWidth: 350,
    minWidth: 279,
    width: '31vw',
    padding: 15,
    height: 119,
    backgroundColor: colorNameToHex('ebonyclay'),
    borderWidth: 1,
    borderColor: colorNameToHex('dimgrey'),
    borderStyle: 'solid',
    borderRadius: 1,
    marginTop: 41,
  },
};

const DropdownSkeleton = () => (
  <div style={styles.container}>
    <Rectangle width={120} height={15} />
  </div>
);

export default DropdownSkeleton;
