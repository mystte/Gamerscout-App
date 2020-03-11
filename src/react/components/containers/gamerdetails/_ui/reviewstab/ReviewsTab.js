import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import ApprovalsCard from '../cardstab/_ui/cards/approvalscard/ApprovalsCard';
import Review from './_ui/review/Review';
import AttributesCard from './_ui/attributescard/AttributesCard';
import ApprovalsCardRecord, {
  APPROVAL_TYPE,
} from '../../../../../datamanager/models/ApprovalsCardRecord';
import DisapprovalsCardRecord from '../../../../../datamanager/models/DisapprovalsCardRecord';
import ReviewsCardRecord from '../../../../../datamanager/models/ReviewsCardRecord';
import ReviewSection from './_ui/reviewsection/ReviewSection';
import ReviewFilter from './_ui/reviewfilters/ReviewFilters';
import UseMediaQueries from '../../../../views/hooks/UseMediaQueries';

const ReviewsTab = ({
  approvalsCardRecord,
  disapprovalsCardRecord,
  reviewsCardRecord,
  onReviewSubmitClick,
  attributesList,
  preselect,
  onReviewFilterChange,
}) => {
  if (!reviewsCardRecord) return null;
  const { getResponsiveStyle } = UseMediaQueries();

  const renderReviews = () =>
    reviewsCardRecord.filtered.map((review, idx) => (
      <Review key={`review-${idx}`} reviewRecord={review} />
    ));

  return (
    <div style={styles[getResponsiveStyle('container')]}>
      <div style={styles[getResponsiveStyle('statsContainer')]}>
        <div style={styles.approvalsContainer}>
          <ApprovalsCard
            approvalsCardRecord={approvalsCardRecord}
            type={APPROVAL_TYPE.APPROVAL}
          />
          <ApprovalsCard
            approvalsCardRecord={disapprovalsCardRecord}
            type={APPROVAL_TYPE.DISAPPROVAL}
          />
        </div>
        <AttributesCard attributesList={attributesList} />
      </div>
      <div style={styles[getResponsiveStyle('reviewSectionContainer')]}>
        <ReviewSection
          onReviewSubmitClick={onReviewSubmitClick}
          preselect={preselect}
        />
        {reviewsCardRecord.reviews.size > 0 && (
          <div style={styles.reviewsListContainer}>
            <div style={styles.reviewFilterContainer}>
              <ReviewFilter onReviewFilterChange={onReviewFilterChange} />
            </div>
            {renderReviews()}
          </div>
        )}
      </div>
    </div>
  );
};

ReviewsTab.propTypes = {
  approvalsCardRecord: PropTypes.instanceOf(ApprovalsCardRecord),
  disapprovalsCardRecord: PropTypes.instanceOf(DisapprovalsCardRecord),
  reviewsCardRecord: PropTypes.instanceOf(ReviewsCardRecord),
  onReviewSubmitClick: PropTypes.func.isRequired,
  attributesList: PropTypes.object,
  preselect: PropTypes.string,
  onReviewFilterChange: PropTypes.func.isRequired,
};

ReviewsTab.defaultProps = {
  reviewsCardRecord: null,
  attributesList: null,
  preselect: null,
};

export default ReviewsTab;
