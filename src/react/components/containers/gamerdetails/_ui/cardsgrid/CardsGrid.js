import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RankedCard from './_ui/cards/rankedcard/RankedCard';
import RankedCardRecord from '../../../../../datamanager/models/RankedCardRecord';
import styles from './styles';

class CardsGrid extends PureComponent {
  static propTypes = {
    gameCode: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    rankedCardRecord: PropTypes.instanceOf(RankedCardRecord),
  };

  static defaultProps = {
    rankedCardRecord: null,
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    if (!this.props.rankedCardRecord) return null;

    return (
      <div style={styles.container}>
        <div style={styles.firstRow}>
          <RankedCard
            gameCode={this.props.gameCode}
            platform={this.props.platform}
            rankedCardRecord={this.props.rankedCardRecord}
          />
          <RankedCard
            gameCode={this.props.gameCode}
            platform={this.props.platform}
            rankedCardRecord={this.props.rankedCardRecord}
          />
          <RankedCard
            gameCode={this.props.gameCode}
            platform={this.props.platform}
            rankedCardRecord={this.props.rankedCardRecord}
          />
        </div>
      </div>
    );
  }
}

export default CardsGrid;
