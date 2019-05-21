import React from 'react';

import Rectangle from '../rectangle/Rectangle';
import Circle from '../circle/Circle';
import styles from './styles';

const StatsCardSkeleton = () => {
  return (
    <div style={styles.container}>
      <Rectangle width={120} height={15} />
      <div style={styles.rowContainer}>
        <div style={styles.row}>
          <div style={styles.circle}><Circle radius={15} /></div>
          <Rectangle width={200} height={12} />
        </div>
        <div style={styles.row}>
          <div style={styles.circle}><Circle radius={15} /></div>
          <Rectangle width={200} height={12} />
        </div>
      </div>
    </div>
  );
}

export default StatsCardSkeleton;
