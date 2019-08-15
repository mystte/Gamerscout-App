import React, { PureComponent } from 'react';
import { PropTypes } from 'prop-types';

import styles from './styles';
import Localization from '../../../../../../../config/localization/Localization';
import AttributeRow from './_ui/attributerow/AttributeRow';


class AttributesCard extends PureComponent {
  static propTypes = {
    attributesList: PropTypes.object,
  };

  static defaultProps = {
    attributesList: null,
    reviewsCardRecord: null,
  };

  constructor(props) {
    super(props);

    this.state = {
      expanded: false,
    };
  }

  toggleShowAll = () => {
    this.setState({ expanded: !this.state.expanded });
  }

  renderAttributes = () => (
    this.props.attributesList.map((attribute, idx) => (
      ((!this.state.expanded && idx < 3) || this.state.expanded) ? (<AttributeRow
        key={`attribute-${idx}`}
        attributeRecord={attribute}
      />) : <div key={`attribute-${idx}`} />
    ))
  );

  render() {
    if (!this.props.attributesList) return null;
    const labels = Localization.Labels.gamerDetails.attributesCard;
    const containerStyle = (this.state.expanded) ? {
      ...styles.container,
      ...styles.expandedContainer,
    } : styles.container;

    return (
      <div style={containerStyle}>
        <div style={styles.title}>{labels.title}</div>
        <div style={styles.attributesList}>{this.renderAttributes()}</div>
        <div style={styles.footer}>
          <button
            style={styles.showAll}
            onClick={this.toggleShowAll}
          >
            {!this.state.expanded && labels.showAll}
            {this.state.expanded && labels.showLess}
          </button>
        </div>
      </div>
    );
  }
}

export default AttributesCard;
