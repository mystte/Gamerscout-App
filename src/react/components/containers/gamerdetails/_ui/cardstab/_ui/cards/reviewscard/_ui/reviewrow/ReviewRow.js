import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '../../../../../../../../../views/avatar/Avatar';
import styles from './styles';
import ReviewButton from '../reviewbutton/ReviewButton';


const ReviewRow = ({
  reviewerName,
  comment,
}) => (
  <div style={styles.container}>
    <div style={styles.reviewerName}>
      <Avatar name={reviewerName} />
    </div>
    <div className="multiline-ellipsis" style={styles.comment}>{comment}</div>
  </div>
);

ReviewRow.propTypes = {
  reviewerName: PropTypes.string,
  comment: PropTypes.string,
};

ReviewRow.defaultProps = {
  reviewerName: null,
  comment: null,
};

export default ReviewRow;
