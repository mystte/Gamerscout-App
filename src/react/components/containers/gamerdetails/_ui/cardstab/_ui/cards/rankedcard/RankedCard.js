import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import RankedCardRecord from '../../../../../../../../datamanager/models/RankedCardRecord';
import TabSelector from '../../../../../../../views/elements/tabselector/TabSelector';
import RankedTab from './_ui/rankedtab/RankedTab';
import styles from './styles';

class RankedCard extends PureComponent {
  static propTypes = {
    gameCode: PropTypes.string.isRequired,
    platform: PropTypes.string.isRequired,
    rankedCardRecord: PropTypes.instanceOf(RankedCardRecord).isRequired,
  };

  static defaultProps = {};

  constructor(props) {
    super(props);

    this.state = {
      headerList: this.props.rankedCardRecord.getRankedCardTabHeader(
        this.props.platform,
        this.props.gameCode
      ),
    };
  }

  render() {
    const renderedTabs = this.state.headerList.map((header, idx) => {
      const filteredRankedData = this.props.rankedCardRecord.tabsList.filter(
        tabData => tabData.title === header.title
      );

      return (
        <RankedTab
          key={`rankedTab${idx}`}
          rankedData={
            filteredRankedData.size > 0 ? filteredRankedData.get(0) : null
          }
        />
      );
    });

    return (
      <div style={styles.container}>
        <TabSelector
          headerList={this.state.headerList}
          contentList={renderedTabs}
        />
      </div>
    );
  }
}

export default RankedCard;
