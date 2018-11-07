import React from 'react';
import { mount } from 'enzyme';
import '../../../../../sharedUtils/test-utils/src/Setup';
import Canvas from '../Canvas';
import CanvasRecord from '../../../../models/canvas/CanvasRecord';

describe('Canvas', () => {
  it('can instanciate Canvas', () => {
    const props = {
      canvasRecord: new CanvasRecord(),
    };
    const wrapper = mount(<Canvas {...props} />);
    expect(wrapper).not.toBeFalsy();
  });
});
