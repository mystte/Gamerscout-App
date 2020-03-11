import React from 'react';
import PropTypes from 'prop-types';

import SVGIcon, { IMG_TYPE } from '../../../../views/elements/svgicon/SVGIcon';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import ActionButtons from './_ui/actionbuttons/ActionButtons';
import GamerAvatar from './_ui/gameravatar/GamerAvatar';
import Localization from '../../../../../config/localization/Localization';
import styles from './styles';
import { BUTTON_TYPE } from './_ui/actionbuttons/_ui/actionbutton/ActionButton';

const NavHeader = ({
  gamertag,
  gamerLevel,
  region,
  gamerIconUrl,
  selectedTab,
  onSelectTab,
  onReviewSubmitClick,
}) => {
  return (
    <div style={styles.container}>
      <div style={styles.topBannerContainer}>
        <SVGIcon
          type={IMG_TYPE.PNG}
          name="lol/lol-bg"
          width="100%"
          height={220}
          fit="cover"
        />
        <div style={styles.gamerAvatarContainer}>
          <GamerAvatar
            gamertag={gamertag}
            level={gamerLevel}
            region={region}
            iconUrl={gamerIconUrl}
          />
        </div>
        <div style={styles.reviewButtonsContainer}>
          {selectedTab !== BUTTON_TYPE.REVIEWS && (
            <Button
              label={Localization.Labels.gamerDetails.reviewButton}
              theme={BUTTON_THEME.BLUE}
              onClick={onReviewSubmitClick}
            />
          )}
        </div>
      </div>
      <ActionButtons selectedTab={selectedTab} onSelectTab={onSelectTab} />
    </div>
  );
};

NavHeader.propTypes = {
  gamertag: PropTypes.string,
  gamerLevel: PropTypes.number,
  region: PropTypes.string,
  gamerIconUrl: PropTypes.string,
  onSelectTab: PropTypes.func,
  selectedTab: PropTypes.string,
  onReviewSubmitClick: PropTypes.func.isRequired,
  staticDataUrl: PropTypes.string,
};

NavHeader.defaultProps = {
  gamertag: null,
  gamerlevel: 0,
  region: null,
  gamerIconUrl: null,
  onSelectTab: null,
  selectedTab: null,
  staticDataUrl: null,
};

export default NavHeader;
