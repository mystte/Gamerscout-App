import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import ApprovalsCard from '../cardstab/_ui/cards/approvalscard/ApprovalsCard';
import Review from './_ui/review/Review';
import AttributesCard from './_ui/attributescard/AttributesCard';
import ApprovalsCardRecord, { APPROVAL_TYPE } from '../../../../../datamanager/models/ApprovalsCardRecord';
import DisapprovalsCardRecord from '../../../../../datamanager/models/DisapprovalsCardRecord';
import ReviewsCardRecord from '../../../../../datamanager/models/ReviewsCardRecord';
import ReviewSection from './_ui/reviewsection/ReviewSection';
import ReviewFilter from './_ui/reviewfilters/ReviewFilters';

class ReviewsTab extends PureComponent {
  static propTypes = {
    approvalsCardRecord: PropTypes.instanceOf(ApprovalsCardRecord),
    disapprovalsCardRecord: PropTypes.instanceOf(DisapprovalsCardRecord),
    reviewsCardRecord: PropTypes.instanceOf(ReviewsCardRecord),
    onReviewSubmitClick: PropTypes.func.isRequired,
    attributesList: PropTypes.object,
    preselect: PropTypes.string,
    onReviewFilterChange: PropTypes.func.isRequired,
  };

  static defaultProps = {
    reviewsCardRecord: null,
    attributesList: null,
    preselect: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderReviews = () => {
    return this.props.reviewsCardRecord.filtered.map((review, idx) => {
      return (<Review
        key={`review-${idx}`}
        reviewRecord={review}
      />);
    });
  }

  render() {
    if (!this.props.reviewsCardRecord) return null;

    return (
      <div style={styles.container}>
        <div style={styles.statsContainer}>
          <div style={styles.approvalsContainer}>
            <ApprovalsCard
              approvalsCardRecord={this.props.approvalsCardRecord}
              type={APPROVAL_TYPE.APPROVAL}
            />
            <ApprovalsCard
              approvalsCardRecord={this.props.disapprovalsCardRecord}
              type={APPROVAL_TYPE.DISAPPROVAL}
            />
          </div>
          <AttributesCard
            attributesList={this.props.attributesList}
          />
        </div>
        <div style={styles.reviewSectionContainer}>
          <ReviewSection
            onReviewSubmitClick={this.props.onReviewSubmitClick}
            preselect={this.props.preselect}
          />
          {this.props.reviewsCardRecord.reviews.size > 0 &&
            <div style={styles.reviewsListContainer}>
              <div style={styles.reviewFilterContainer}>
                <ReviewFilter
                  onReviewFilterChange={this.props.onReviewFilterChange}
                />
              </div>
              {this.renderReviews()}
            </div>
          }
        </div>
      </div>
    );
  }
}

export default ReviewsTab;
