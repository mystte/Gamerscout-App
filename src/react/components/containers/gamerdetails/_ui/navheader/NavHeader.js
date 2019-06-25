import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGIcon, { IMG_TYPE } from '../../../../views/elements/svgicon/SVGIcon';
import Button, { BUTTON_THEME } from '../../../../views/elements/button/Button';
import ActionButtons from './_ui/actionbuttons/ActionButtons';
import GamerAvatar from './_ui/gameravatar/GamerAvatar';
import Localization from '../../../../../config/localization/Localization';
import styles from './styles';

class NavHeader extends PureComponent {
  static propTypes = {
    gamertag: PropTypes.string,
    gamerLevel: PropTypes.number,
    region: PropTypes.string,
    gamerIconUrl: PropTypes.string,
    onSelectTab: PropTypes.func,
    selectedTab: PropTypes.string,
  };

  static defaultProps = {
    gamertag: null,
    gamerlevel: 0,
    region: null,
    gamerIconUrl: null,
    onSelectTab: null,
    selectedTab: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
  }

  componentWillUnmount() {
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.topBannerContainer}>
          <SVGIcon
            type={IMG_TYPE.PNG}
            name='lol/lol-bg'
            width='100%'
            height={220}
          />
          <div style={styles.gamerAvatarContainer}>
            <GamerAvatar
              gamertag={this.props.gamertag}
              level={this.props.gamerLevel}
              region={this.props.region}
              iconUrl={this.props.gamerIconUrl}
            />
          </div>
          <div style={styles.reviewButtonsContainer}>
            <Button
              label={Localization.Labels.gamerDetails.reviewButton}
              theme={BUTTON_THEME.BLUE}
              onClick={() => {}}
            />
          </div>
        </div>
        <ActionButtons
          selectedTab={this.props.selectedTab}
          onSelectTab={this.props.onSelectTab}
        />
      </div>
    );
  }
}

export default NavHeader;
