import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Localization from '../../../config/localization/Localization';
import SVGIcon, { IMG_TYPE } from '../../views/elements/svgicon/SVGIcon';

import styles from './styles';

const mapStateToProps = (state) => ({
  config: state.app.get('data'),
  loading: state.app.get('loading'),
  error: state.app.get('error'),
});

const Home = () => {
  const labels = Localization.Labels.home;

  return (
    <div style={styles.container}>
      <div style={styles.headerContainer}>
        <h1 style={styles.title}>{labels.title}</h1>
        <h1 style={styles.title}>{labels.title2}</h1>
        <p style={styles.desc}>{labels.desc}</p>
        <div style={styles.homeBg}>
          <SVGIcon
            type={IMG_TYPE.PNG}
            width={'100%'}
            height={'100%'}
            name={'home/background'}
          />
        </div>
      </div>
      <div style={styles.statsBandeau}>
        <div style={styles.approvalsContainer}>
          <div style={styles.approvalsPictContainer}>
            <SVGIcon
              type={IMG_TYPE.PNG}
              name={'home/approvals'}
              width={170}
              height={115}
            />
            <div style={styles.separator} />
            <SVGIcon
              type={IMG_TYPE.PNG}
              name={'home/disapprovals'}
              width={170}
              height={115}
            />
          </div>
          <span style={styles.statTitle}>
            {labels.ratings}
          </span>
        </div>
        <div style={styles.approvalsContainer}>
          <SVGIcon
            type={IMG_TYPE.PNG}
            name={'home/review'}
            width={350}
            height={148}
          />
          <span style={styles.statTitle}>
            {labels.reviews}
          </span>
        </div>
        <div style={styles.approvalsContainer}>
          <SVGIcon
            type={IMG_TYPE.PNG}
            name={'home/trends'}
            width={350}
            height={119}
          />
          <span style={styles.statTitle}>
            {labels.stats}
          </span>
        </div>
      </div>
      <div></div>
    </div>
  );
};

Home.propTypes = {
  config: PropTypes.object,
  loading: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired,
};

Home.defaultProps = {
};

export default withRouter(
  connect(mapStateToProps)(Home),
);
