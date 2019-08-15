import React from 'react';

import Rectangle from '../rectangle/Rectangle';
import Circle from '../circle/Circle';
import styles from './styles';

const MatchHistorySkeleton = () => (
  <div style={styles.container}>
    <Rectangle width={228} height={15} />
    <div style={styles.bottom}>
      <Circle radius={27} />
      <div style={styles.right}>
        <div style={styles.rect1}>
          <Rectangle width={110} height={12} />
        </div>
        <Rectangle width={110} height={12} />
      </div>
    </div>
  </div>
);

export default MatchHistorySkeleton;
