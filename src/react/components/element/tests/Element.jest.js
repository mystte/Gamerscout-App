import React from 'react';
import { mount } from 'enzyme';
import '../../../../../sharedUtils/test-utils/src/Setup';
import Element from '../Element';
import ElementRecord from '../../../../models/canvas/ElementRecord';

describe('Element', () => {
  it('can instanciate Element', () => {
    const props = {
      elementRecord: new ElementRecord(),
    };
    const wrapper = mount(<Element {...props} />);
    expect(wrapper).not.toBeFalsy();
  });
});
