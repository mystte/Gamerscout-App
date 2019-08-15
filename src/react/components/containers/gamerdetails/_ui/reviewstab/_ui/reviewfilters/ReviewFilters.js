import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../config/localization/Localization';
import styles from './styles';
import DropDown, { SELECT_TYPE, DROPDOWN_TYPE } from '../../../../../../views/elements/dropdown/DropDown';
import { REVIEW_FILTER } from '../../../../../../../datamanager/models/ReviewsCardRecord';

const ReviewFilter = ({ onReviewFilterChange }) => {
  const labels = Localization.Labels.gamerDetails.reviewsCard.filters;

  const [showFilter, setShowFilter] = useState(REVIEW_FILTER.SHOW_ALL);
  const [filterBy, setFilterBy] = useState(REVIEW_FILTER.NEWEST);

  const onFilterChange = (selectedFilter) => {
    let newShowFilter = showFilter;
    let newFilterBy = filterBy;

    if (selectedFilter.name === REVIEW_FILTER.SHOW_ALL
        || selectedFilter.name === REVIEW_FILTER.SHOW_APPROVALS
        || selectedFilter.name === REVIEW_FILTER.SHOW_DISAPPROVALS) {
      setShowFilter(selectedFilter.name);
      newShowFilter = selectedFilter.name;
    } else {
      setFilterBy(selectedFilter.name);
      newFilterBy = selectedFilter.name;
    }
    return onReviewFilterChange(newShowFilter, newFilterBy);
  };

  return (
    <div style={styles.container}>
      <div style={styles.border}></div>
      <div style={styles.showFilter}>
        <span style={styles.filterLabel}>{labels.show}:</span>
        <DropDown
          options={[
            { name: REVIEW_FILTER.SHOW_ALL, label: labels.all },
            { name: REVIEW_FILTER.SHOW_APPROVALS, label: labels.approvals },
            { name: REVIEW_FILTER.SHOW_DISAPPROVALS, label: labels.disapprovals },
          ]}
          selectType={SELECT_TYPE.SIMPLE}
          dropDown={DROPDOWN_TYPE.DEFAULT}
          onChange={onFilterChange}
        />
        <span style={styles.filterLabel}>{labels.filterBy}:</span>
        <DropDown
          options={[
            { name: REVIEW_FILTER.NEWEST, label: labels.newest },
            { name: REVIEW_FILTER.OLDEST, label: labels.oldest },
          ]}
          selectType={SELECT_TYPE.SIMPLE}
          dropDownType={DROPDOWN_TYPE.DEFAULT}
          onChange={onFilterChange}
        />
      </div>
    </div>
  );
};

ReviewFilter.propTypes = {
  onReviewFilterChange: PropTypes.func,
};

ReviewFilter.defaultProps = {
};

export default ReviewFilter;
