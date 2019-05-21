import React from 'react';

import Rectangle from '../rectangle/Rectangle';
import styles from './styles';

const ApprovalsCardSkeleton = () => {
  return (
    <div style={styles.container}>
      <Rectangle width={120} height={15} />
      <div style={styles.rect2}><Rectangle width={54} height={15} /></div>
    </div>
  );
}

export default ApprovalsCardSkeleton;
