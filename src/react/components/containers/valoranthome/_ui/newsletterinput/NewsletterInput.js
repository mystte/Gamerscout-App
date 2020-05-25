import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import Localization from '../../../../../config/localization/Localization';
import styles from './styles';

const NewsletterInput = ({ onChange, onSubmit }) => {
  const labels = Localization.Labels.valorantHome;
  const [email, setEmail] = useState();

  return (
    <div style={styles.container}>
      <input
        onChange={e => {
          onChange(e.target.value);
          setEmail(e.target.value);
        }}
        style={styles.input}
        placeholder={labels.placeholder}
      />
      <div onClick={() => onSubmit(email)} style={styles.submit}>
        <div style={styles.lbl}>{labels.submit}</div>
      </div>
    </div>
  );
};

NewsletterInput.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default NewsletterInput;
