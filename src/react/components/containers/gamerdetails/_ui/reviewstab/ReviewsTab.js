import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import ApprovalsCard, { APPROVAL_TYPE } from '../cardstab/_ui/cards/approvalscard/ApprovalsCard';
import AttributesCard from './_ui/attributescard/AttributesCard';
import ApprovalsCardRecord from '../../../../../datamanager/models/ApprovalsCardRecord';
import DisapprovalsCardRecord from '../../../../../datamanager/models/DisapprovalsCardRecord';
import ReviewsCardRecord from '../../../../../datamanager/models/ReviewsCardRecord';


class ReviewsTab extends PureComponent {
  static propTypes = {
    approvalsCardRecord: PropTypes.instanceOf(ApprovalsCardRecord),
    disapprovalsCardRecord: PropTypes.instanceOf(DisapprovalsCardRecord),
    reviewsCardRecord: PropTypes.instanceOf(ReviewsCardRecord),
    attributesList: PropTypes.object,
  };

  static defaultProps = {
    reviewsCardRecord: null,
    attributesList: null,
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
              type={APPROVAL_TYPE.APPROVALS}
            />
            <ApprovalsCard
              approvalsCardRecord={this.props.disapprovalsCardRecord}
              type={APPROVAL_TYPE.DISAPPROVALS}
            />
          </div>
          <AttributesCard
            attributesList={this.props.attributesList}
          />
        </div>
        <div style={styles.sectionContainer}>
        </div>
      </div>
    );
  }
}

export default ReviewsTab;
