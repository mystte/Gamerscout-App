import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../config/localization/Localization';
import Button, { buttonTheme } from '../../../../../../views/elements/button/Button';
import CommentArea from './_ui/commentarea/CommentArea';
import styles from './styles';

class ReviewSection extends PureComponent {
  static propTypes = {
    onReviewSubmitClick: PropTypes.func.isRequired,
    preselect: PropTypes.string,
  };

  static defaultProps = {
    preselect: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const labels = Localization.Labels.gamerDetails.attributesCard.reviewSection;

    return (
      <div style={styles.container}>
        <div style={styles.title}>{labels.title}</div>
        <CommentArea
          preselect={this.props.preselect}
        />
        <div style={styles.reviewButton}>
          <Button
            label={labels.review}
            onClick={this.props.onReviewSubmitClick}
            theme={buttonTheme.GREY}
          />
        </div>
      </div>
    );
  }
}

export default ReviewSection;
