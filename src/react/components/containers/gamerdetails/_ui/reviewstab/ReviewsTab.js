import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import ApprovalsCard from '../cardstab/_ui/cards/approvalscard/ApprovalsCard';
import AttributesCard from './_ui/attributescard/AttributesCard';
import ApprovalsCardRecord, { APPROVAL_TYPE } from '../../../../../datamanager/models/ApprovalsCardRecord';
import DisapprovalsCardRecord from '../../../../../datamanager/models/DisapprovalsCardRecord';
import ReviewsCardRecord from '../../../../../datamanager/models/ReviewsCardRecord';
import ReviewSection from './_ui/reviewsection/ReviewSection';


class ReviewsTab extends PureComponent {
  static propTypes = {
    approvalsCardRecord: PropTypes.instanceOf(ApprovalsCardRecord),
    disapprovalsCardRecord: PropTypes.instanceOf(DisapprovalsCardRecord),
    reviewsCardRecord: PropTypes.instanceOf(ReviewsCardRecord),
    onReviewSubmitClick: PropTypes.func.isRequired,
    attributesList: PropTypes.object,
    preselect: PropTypes.string
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

  render() {
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
        </div>
      </div>
    );
  }
}

export default ReviewsTab;
