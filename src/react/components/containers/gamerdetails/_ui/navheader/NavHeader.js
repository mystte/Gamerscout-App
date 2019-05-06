import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import SVGIcon, { SVG_TYPE } from '../../../../views/elements/svgicon/SVGIcon';
import Button, { buttonTheme } from '../../../../views/elements/button/Button';
import ActionButtons from './_ui/actionbuttons/ActionButtons';
import GamerAvatar from './_ui/gameravatar/GamerAvatar';
import styles from './styles';

class NavHeader extends PureComponent {
  static propTypes = {
    gamertag: PropTypes.string.isRequired,
    gamerLevel: PropTypes.number.isRequired,
    region: PropTypes.string.isRequired,
    gamerIconUrl: PropTypes.string.isRequired,
  };

  static defaultProps = {
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
            type={SVG_TYPE.PNG}
            name='lol-bg'
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
              label='Review'
              theme={buttonTheme.BLUE}
              onClick={() => {}}
            />
          </div>
        </div>
        <ActionButtons />
      </div>
    );
  }
}

export default NavHeader;
