import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ReviewRow from './_ui/reviewrow/ReviewRow';
import ReviewButton from './_ui/reviewbutton/ReviewButton';
import Localisation from "../../../../../../../../config/localization/Localization";
import ReviewsCardRecord from '../../../../../../../../datamanager/models/ReviewsCardRecord';
import styles from './styles';

class ReviewsCard extends PureComponent {
  static propTypes = {
    reviewsCardRecord: PropTypes.instanceOf(ReviewsCardRecord),
    onReviewButtonClick: PropTypes.func.isRequired,
  };

  static defaultProps = {
    reviewsCardRecord: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderReviews = () => {
    return this.props.reviewsCardRecord.reviews.map((review, idx) => {
      return (idx < 3) ? (<ReviewRow
        key={`reviewrow-${idx}`}
        reviewerName={review.reviewerName}
        comment={review.comment}
      />) : '';
    });
  }

  render() {
    if (!this.props.reviewsCardRecord) return null;

    const labels = Localisation.Labels.gamerDetails.reviewsCard;
    const footerStyle = (this.props.reviewsCardRecord.reviews.size === 0) ? {
      ...styles.footer,
      ...styles.emptyFooter,
    } : styles.footer;

    return (
      <div style={styles.container}>
        <div style={styles.header}>
          <div style={styles.title}>{labels.title}</div>
          <button onClick={this.props.onReviewButtonClick} style={styles.viewAll}>{labels.viewAll}</button>
        </div>
        <div style={styles.reviewsContent}>
          { this.renderReviews() }
        </div>
        <div style={footerStyle}>
          <ReviewButton onClick={this.props.onReviewButtonClick} />
          <div style={styles.actionLabel}>{labels.action}</div>
        </div>
      </div>
    );
  }
}

export default ReviewsCard;
