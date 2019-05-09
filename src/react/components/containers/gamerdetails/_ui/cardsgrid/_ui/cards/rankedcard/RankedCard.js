import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RankedTab from './_ui/rankedtab/RankedTab';
import styles from './styles';

class RankedCard extends PureComponent {
  static propTypes = {
    rankedList: PropTypes.array.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
    };
  }

  onTabSelect = (idx) => {

  }

  render() {
    console.log("#### data = ", this.props.rankedList);
    const renderedTabs = this.props.rankedList.map((rankedData, idx) => {
      return (<RankedTab
        key={`rankedTab${idx}`}
        selected={this.state.selectedTab === idx}
        idx={idx}
        rankedData={rankedData}
      />);
    });
    return (
      <div style={styles.container}>
        {renderedTabs}
      </div>
    );
  }
}

export default RankedCard;
