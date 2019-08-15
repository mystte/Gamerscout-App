import React from 'react';

import Rectangle from '../rectangle/Rectangle';
import Circle from '../circle/Circle';
import styles from './styles';

const RankedCardSkeleton = () => (
  <div style={styles.container}>
    <div style={styles.title}>
      <Rectangle width={120} height={15} />
    </div>
    <div style={styles.content}>
      <Circle radius={27} />
      <div style={styles.rankedData}>
        <div style={styles.firstRect}><Rectangle width={120} height={15} /></div>
        <Rectangle width={120} height={15} />
      </div>
    </div>
  </div>
);

export default RankedCardSkeleton;
