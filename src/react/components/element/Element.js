import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { UniversalButton } from '../../../../sharedComponents/universalcomponents';
import colors from '../../../config/colors';
import ElementRecord from '../../../models/canvas/ElementRecord';
import { hexToRgbA } from '../../../../sharedUtils/color';

const styles = {
  container: {
    backgroundColor: hexToRgbA(colors.black, 0.2),
    position: 'absolute',
  },
  selected: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: 'red',
  },
};

export default class Element extends PureComponent {
  static propTypes = {
    elementRecord: PropTypes.instanceOf(ElementRecord).isRequired,
    onSelectElement: PropTypes.func,
    testId: PropTypes.string,
  }

  static defaultProps = {
    onSelectElement: null,
    testId: null,
  }

  onPress = () => {
    this.props.onSelectElement(this.props.elementRecord);
  }

  render() {
    const {
      selected, width, height, x, y,
    } = this.props.elementRecord;

    const combinedWithRecordStyle = {
      ...styles.container, width, height, left: `${x}%`, top: `${y}%`,
    };

    const combinedStyle = selected ? { ...styles.selected, ...combinedWithRecordStyle } : combinedWithRecordStyle;
    return (
      <UniversalButton
        testId={this.props.testId}
        style={combinedStyle}
        onPress={this.onPress}
      />
    );
  }
}
