import React, { PureComponent } from 'react';
import { UniversalView, UniversalButton, UniversalText } from '../../sharedComponents/universalcomponents';

import Canvas from './components/canvas/Canvas';
import colors from '../config/colors';
import CanvasRecord from '../models/canvas/CanvasRecord';
import { colorNameToHex } from '../../sharedUtils/color';
import ElementRecord from '../models/canvas/ElementRecord';

const styles = {
  container: {
    position: 'relative',
  },
  buttonUnselect: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    border: 'none',
  },
  button: {
    position: 'absolute',
    right: 10,
    top: 10,
    borderRadius: 6,
    padding: 10,
    backgroundColor: colors.IOS_BLUE,
  },
  buttonText: {
    fontSize: 13,
    fontWeight: 'bold',
    color: colorNameToHex('white'),
  },
};


class ActivityEditor extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      canvasRecord: new CanvasRecord(),
      selectedElement: null,
    };
  }

  onButtonCreateElement = () => {
    const elementRecord = new ElementRecord({
      id: String(Math.random()),
      x: Math.random() * 100,
      y: Math.random() * 100,
    });
    this.setState((previousState) => (
      { canvasRecord: previousState.canvasRecord.addElement(elementRecord) }
    ));
  };

  onSelectElement = (element) => {
    this.setState((previousState) => ({
      canvasRecord: previousState.canvasRecord.selectElement(element, previousState.selectedElement),
      selectedElement: element,
    }));
  };

  onUnselect = () => {
    const element = this.state.selectedElement;
    if (!element) { return; }

    this.setState((previousState) => ({
      canvasRecord: previousState.canvasRecord.unselectElement(element),
      selectedElement: null,
    }));
  }

  render() {
    return (
      <UniversalView style={styles.container}>
        <UniversalButton style={styles.buttonUnselect} onPress={this.onUnselect} />
        <Canvas canvasRecord={this.state.canvasRecord} onSelectElement={this.onSelectElement} />
        <UniversalButton style={styles.button} onPress={this.onButtonCreateElement}>
          <UniversalText style={styles.buttonText}>
            {'Create Element'}
          </UniversalText>
        </UniversalButton>
      </UniversalView>
    );
  }
}

export default ActivityEditor;
