import React from 'react';

// import PropTypes from 'prop-types';
import Localization from '../../../../../../../config/localization/Localization';
import styles from './styles';
import DropDown, { SELECT_TYPE, DROPDOWN_TYPE } from '../../../../../../views/elements/dropdown/DropDown';

const ReviewFilter = () => {
  const labels = Localization.Labels.gamerDetails.reviewsCard.filters;

  return (
    <div style={styles.container}>
      <div style={styles.border}></div>
      <div style={styles.showFilter}>
        <DropDown
          options={[
            { name: 'All', label: labels.all },
            { name: 'Approvals', label: labels.approvals },
            { name: 'Disapprovals', label: labels.disapprovals },
          ]}
          selectType={SELECT_TYPE.SIMPLE}
          dropDown={DROPDOWN_TYPE.DEFAULT}
        />
        <DropDown
          options={[
            { name: 'Newest', label: labels.all },
            { name: 'Oldest', label: labels.approvals },
          ]}
          selectType={SELECT_TYPE.SIMPLE}
          dropDownType={DROPDOWN_TYPE.DEFAULT}
        />
      </div>
    </div>
  );
}

ReviewFilter.propTypes = {
};

ReviewFilter.defaultProps = {
};

export default ReviewFilter;
