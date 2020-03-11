import React from 'react';
import PropTypes from 'prop-types';

import ReviewRow from './_ui/reviewrow/ReviewRow';
import ReviewButton from './_ui/reviewbutton/ReviewButton';
import Localisation from '../../../../../../../../config/localization/Localization';
import ReviewsCardRecord from '../../../../../../../../datamanager/models/ReviewsCardRecord';
import styles from './styles';
import UseMediaQueries from '../../../../../../../views/hooks/UseMediaQueries';

const ReviewsCard = ({ reviewsCardRecord, onReviewButtonClick }) => {
  const { getResponsiveStyle } = UseMediaQueries();
  const renderReviews = () =>
    reviewsCardRecord.reviews.map((review, idx) =>
      idx < 3 ? (
        <ReviewRow
          key={`reviewrow-${idx}`}
          reviewerName={review.reviewerName}
          comment={review.comment}
        />
      ) : (
        ''
      )
    );

  if (!reviewsCardRecord) return null;

  const labels = Localisation.Labels.gamerDetails.reviewsCard;
  const footerStyle =
    reviewsCardRecord.reviews.size === 0
      ? {
          ...styles.footer,
          ...styles.emptyFooter,
        }
      : styles.footer;

  return (
    <div style={styles[getResponsiveStyle('container')]}>
      <div style={styles.header}>
        <div style={styles.title}>{labels.title}</div>
        <button onClick={onReviewButtonClick} style={styles.viewAll}>
          {labels.viewAll}
        </button>
      </div>
      <div style={styles.reviewsContent}>{renderReviews()}</div>
      <div style={footerStyle}>
        <ReviewButton onClick={onReviewButtonClick} />
        <div style={styles.actionLabel}>{labels.action}</div>
      </div>
    </div>
  );
};

ReviewsCard.propTypes = {
  reviewsCardRecord: PropTypes.instanceOf(ReviewsCardRecord),
  onReviewButtonClick: PropTypes.func.isRequired,
};

ReviewsCard.defaultProps = {
  reviewsCardRecord: null,
};

export default ReviewsCard;
