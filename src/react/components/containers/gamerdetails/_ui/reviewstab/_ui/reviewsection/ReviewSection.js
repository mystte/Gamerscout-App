import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Localization from '../../../../../../../config/localization/Localization';
import Button, {
  BUTTON_THEME,
} from '../../../../../../views/elements/button/Button';
import CommentArea from './_ui/commentarea/CommentArea';
import styles from './styles';
import { APPROVAL_TYPE } from '../../../../../../../datamanager/models/ApprovalsCardRecord';

const ReviewSection = ({ preselect, onReviewSubmitClick }) => {
  const labels = Localization.Labels.gamerDetails.attributesCard.reviewSection;
  const errorLabels = Localization.Errors;
  const [selectedAttributes, setSelectedAttributes] = useState([]);
  const [review, setReview] = useState(null);
  const [isApproval, setIsApproval] = useState(
    preselect === APPROVAL_TYPE.APPROVAL ? preselect : false
  );
  const [isDisapproval, setIsDisapproval] = useState(
    preselect === APPROVAL_TYPE.DISAPPROVAL ? preselect : false
  );
  const reviewError = useSelector(state => state.gamerDetails.get('error'));

  const resetAttributes = () => {
    setSelectedAttributes([]);
  };

  const onReviewChange = value => {
    setReview(value);
  };

  const onSelectAttribute = attr => {
    let isAttrValidated = true;
    const isAlreadySelectedIdx = selectedAttributes.indexOf(attr);

    if (
      selectedAttributes.length >= 2 ||
      selectedAttributes.find(el => el.id === attr.id)
    )
      isAttrValidated = false;

    if (isAttrValidated) setSelectedAttributes([...selectedAttributes, attr]);
    if (!isAttrValidated && isAlreadySelectedIdx !== -1) {
      const tmpArray = selectedAttributes;
      setSelectedAttributes(tmpArray.filter(elem => elem.id !== attr.id));
    }
  };

  const onSubmit = () => {
    onReviewSubmitClick({
      review,
      selectedAttributes,
      isApproval,
      isDisapproval,
    });
  };

  const onApprovalsSelect = ({ approveSelected, disapproveSelected }) => {
    setIsApproval(approveSelected);
    setIsDisapproval(disapproveSelected);
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>{labels.title}</div>
      <CommentArea
        onChange={onReviewChange}
        onApprovalsSelect={onApprovalsSelect}
        preselect={preselect}
        onReviewSubmitClick={onSubmit}
        selectedAttributes={selectedAttributes}
        onSelectAttribute={onSelectAttribute}
        resetAttributes={resetAttributes}
      />
      <div style={styles.reviewButton}>
        <div style={styles.errorMessage}>{errorLabels.review[reviewError]}</div>
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
  preselect: null,
};

export default ReviewSection;
