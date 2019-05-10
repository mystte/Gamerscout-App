import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { List } from 'immutable';
import styles from './styles';

class TabSelector extends PureComponent {
  static propTypes = {
    headerList: PropTypes.array.isRequired,
    contentList: PropTypes.object.isRequired,
  };

  static defaultProps = {
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedTab: 0,
    };
  }

  onSelectTab = (idx) => {
    console.log("tab selected", idx);
    if (idx !== this.state.selectedTab) {
      this.setState({
        selectedTab: idx,
      });
    }
  }

  renderHeader = () => {
    return this.props.headerList.map((header, idx) => {
      const tabStyle = (idx === this.state.selectedTab) ? {
        ...styles.headerTab,
        ...styles.selectedTab,
      } : styles.headerTab;

      return (
        <div
          style={tabStyle}
          onClick={() => this.onSelectTab(idx)}
        >
          {header.name}
        </div>
      );
    });
  }

  renderContent = () => {
    return (
      this.props.contentList.map((content, idx) => {
        return (idx === this.state.selectedTab) ? content : null;
      })
    );
  }

  render() {
    if (!this.props.headerList && !this.props.contentList) return null;

    return (
      <div style={styles.container}>
        <div style={styles.headerContainer}>
          {this.renderHeader()}
        </div>
        <div style={styles.contentContainer}>
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default TabSelector;
