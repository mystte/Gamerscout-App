import React from 'react';

// import PropTypes from 'prop-types';

import styles from './styles';
// import DropDown from '../../../../../../views/elements/dropdown/DropDown';

const ReviewFilter = () => {
  return (
    <div style={styles.container}>
      <div style={styles.border}></div>
      {/* <div style={styles.showFilter}>
        <DropDown
          contentList={[
            { name: 'first' },
            { name: 'second' },
            { name: 'third' },
            { name: 'fourth' },
          ]}
          select={0}
        />
      </div> */}
    </div>
  );
}

ReviewFilter.propTypes = {
};

ReviewFilter.defaultProps = {
};

export default ReviewFilter;
