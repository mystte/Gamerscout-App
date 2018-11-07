import React from 'react';
import { mount } from 'enzyme';
import '../../../sharedUtils/test-utils/src/Setup';
import AppRoot from '../..';

describe('AppRoot', () => {
  it('can instanciate AppRoot', () => {
    const wrapper = mount(<AppRoot />);
    expect(wrapper).not.toBeFalsy();
  });
});
