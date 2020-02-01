/* eslint-disable no-restricted-globals */
import React from 'react';
import { useHistory } from 'react-router-dom';
import SVGIcon, { IMG_TYPE } from '../../views/elements/svgicon/SVGIcon';
import Localization from '../../../config/localization/Localization';
import styles from './styles';
import Button, { BUTTON_THEME } from '../../views/elements/button/Button';
import { getHomeUrl } from '../../../config/routes';

const FourOFour = () => {
  const labels = Localization.Labels.fourOFour;
  const history = useHistory();

  const goHome = () => {
    history.push(getHomeUrl());
  };

  return (
    <div style={styles.container}>
      <SVGIcon width={300} height={333} type={IMG_TYPE.PNG} name={'404'} />
      <div style={styles.title}>404</div>
      <div style={styles.desc}>{labels.desc}</div>
      <div style={styles.goHome}>
        <Button
          label={labels.goHome}
          onClick={goHome}
          theme={BUTTON_THEME.BLUE}
        />
      </div>
    </div>
  );
};

export default FourOFour;
