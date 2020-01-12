import React from 'react';

import Rectangle from '../rectangle/Rectangle';
import Circle from '../circle/Circle';
import DropDownSkeleton from './_ui/dropdownskeleton/DropDownSkeleton';
import styles from './styles';

const RankedCardSkeleton = () => (
  <div style={styles.container}>
    <div style={styles.header}>
      <div style={styles.dropdown1}>
        <DropDownSkeleton />
      </div>
      <div style={styles.dropdown2}>
        <DropDownSkeleton />
      </div>
    </div>
    <div style={styles.bottomContainer}>
      <Rectangle width={120} height={15} />
      <div style={styles.content}>
        <Circle radius={27} />
        <div style={styles.right}>
          <div style={styles.topRect}>
            <Rectangle width={120} height={15} />
          </div>
          <Rectangle width={120} height={15} />
        </div>
      </div>
    </div>
  </div>
);

export default RankedCardSkeleton;
