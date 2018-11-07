import React from 'react';
import { mount } from 'enzyme';

// utils
import '../../../../sharedUtils/test-utils/src/Setup';

import UniversalButton from '../src/UniversalButton';

describe('UniversalButton', () => {
  const defaultProps = {
    onPress: jest.fn(),
  };

  it('can instanciate UniversalButton', () => {
    const wrapper = mount(<UniversalButton {...defaultProps} />);
    expect(wrapper).not.toBeFalsy();
    wrapper.instance().onPress(null);
    expect(defaultProps.onPress).toBeCalled();

    wrapper.setProps({ disabled: true });
    const style = wrapper.find('button').prop('disabled');
    expect(style).toBe('disabled');
  });
});
