import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../config/localization/Localization';
import Button, { BUTTON_THEME } from '../../../../../../views/elements/button/Button';
import CommentArea from './_ui/commentarea/CommentArea';
import styles from './styles';

const ReviewSection = ({ preselect, onReviewSubmitClick }) => {
  const labels = Localization.Labels.gamerDetails.attributesCard.reviewSection;
  const [selectedAttributes, setSelectedAttributes] = useState([]);

  const onSelectAttribute = (attr) => {
    setSelectedAttributes([...selectedAttributes, attr]);
  };

  const onSubmit = () => {
    setSelectedAttributes([]);
    onReviewSubmitClick({ selectedAttributes });
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <CommentArea
        preselect={preselect}
        onReviewSubmitClick={onSubmit}
        selectedAttributes={selectedAttributes}
        onSelectAttribute={onSelectAttribute}
      />
      <div style={styles.reviewButton}>
        <Button
          label={labels.review}
          onClick={onSubmit}
          theme={BUTTON_THEME.GREY}
        />
      </div>
    </div>
  );
};

ReviewSection.propTypes = {
  onReviewSubmitClick: PropTypes.func.isRequired,
  preselect: PropTypes.string,
};

ReviewSection.defaultProps = {

};

export default ReviewSection;
