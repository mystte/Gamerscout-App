import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

import Localization from '../../../../../../../config/localization/Localization';
import ReviewRecord, { REVIEW_TYPE } from '../../../../../../../datamanager/models/ReviewRecord';
import styles from './styles';
import Avatar from '../../../../../../views/avatar/Avatar';
import SVGIcon, { IMG_TYPE } from '../../../../../../views/elements/svgicon/SVGIcon';
import { ATTRIBUTE_TYPE } from '../../../../../../../datamanager/models/AttributeRecord';

class Review extends PureComponent {
  static propTypes = {
    reviewRecord: PropTypes.instanceOf(ReviewRecord),
  };

  static defaultProps = {
    reviewRecord: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  renderAttributesIcons = () => {
    return this.props.reviewRecord.attributes.map((attribute, idx) => {
      let attributeIconStyle = {
        ...styles.attributeIcon,
        ...styles.iconGood,
        left: (idx === 1) ? 129 : 110,
      };

      if (attribute.type === ATTRIBUTE_TYPE.BAD) {
        attributeIconStyle = {
          ...attributeIconStyle,
          ...styles.iconBad,
        };
      }

      return (<div style={attributeIconStyle} key={`attribute-${attribute.name}`}>
        <SVGIcon
          width={28}
          height={28}
          name={`attributes/${attribute.name}`}
          type={IMG_TYPE.PNG}
        />
      </div>);
    });
  }

  render() {
    if (!this.props.reviewRecord) return null;
    const labels = Localization.Labels.gamerDetails.review;
    const reviewTypeStyle = (this.props.reviewRecord.type === REVIEW_TYPE.APPROVAL) ? {
      ...styles.reviewType,
      ...styles.approval,
    } : {
      ...styles.reviewType,
      ...styles.disapproval,
    };
    const reviewTypeLabel = (this.props.reviewRecord.type === REVIEW_TYPE.APPROVAL) ? labels.approval : labels.disapproval;

    return (
      <div style={styles.container}>
        <div style={styles.top}>
          <div style={styles.header}>
            <Avatar
              width={40}
              height={40}
              name={this.props.reviewRecord.reviewerName}
            />
            <div style={styles.gamerContainer}>
              <span style={styles.name}>{this.props.reviewRecord.reviewerName}</span>
              <span style={styles.date}>
                {moment(this.props.reviewRecord.date).fromNow()}
              </span>
            </div>
          </div>
          <div style={styles.commentContainer}>{this.props.reviewRecord.comment}</div>
        </div>
        <div style={styles.bottom}>
          <span style={reviewTypeStyle}>{reviewTypeLabel}</span>
          {this.renderAttributesIcons()}
        </div>
      </div>
    );
  }
}

export default Review;
