import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RankedCard from './_ui/cards/rankedcard/RankedCard';
import styles from './styles';

class CardsGrid extends PureComponent {
  static propTypes = {
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.firstRow}>
          <RankedCard
            data={[
              {
                title: "RANKED SOLO",
                rank: "Platinium 3",
                points: 71,
                wins: 10,
                losses: 5,
                percentage: 45,
                selected: true,
              },
              {
                title: "FLEX 5V5",
                rank: "Platinium 2",
                points: 30,
                wins: 5,
                losses: 5,
                percentage: 50,
                selected: false,
              },
            ]}
          />
          <RankedCard
            data={[]}
          />
          <RankedCard
            data={[]}
          />
        </div>
      </div>
    );
  }
}

export default CardsGrid;
