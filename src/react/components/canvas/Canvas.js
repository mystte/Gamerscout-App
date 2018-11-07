import React from 'react';
import PropTypes from 'prop-types';
import { UniversalView } from '../../../../sharedComponents/universalcomponents';
import colors from '../../../config/colors';
import Element from '../element/Element';
import CanvasRecord from '../../../models/canvas/CanvasRecord';

const styles = {
  container: {
    backgroundColor: colors.GRAY_EXTRA_LIGHT,
    width: 1088,
    height: 654,
  },
};

const Canvas = (props) => {
  const { canvasRecord } = props;
  const elements = canvasRecord.elements.map(elementRecord => (
    <Element testId={elementRecord.id} key={elementRecord.id} elementRecord={elementRecord} onSelectElement={props.onSelectElement} />
  ));
  return (
    <UniversalView style={styles.container}>
      {elements}
    </UniversalView>
  );
};

Canvas.propTypes = {
  canvasRecord: PropTypes.instanceOf(CanvasRecord).isRequired,
  onSelectElement: PropTypes.func,
};

Canvas.defaultProps = {
  onSelectElement: null,
};

export default Canvas;

