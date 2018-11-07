import React from 'react';
import { mount } from 'enzyme';
import '../../../sharedUtils/test-utils/src/Setup';
import ActivityEditor from '../..';

describe('ActivityEditor', () => {
  it('can instanciate ActivityEditor', () => {
    const wrapper = mount(<ActivityEditor />);
    expect(wrapper).not.toBeFalsy();
  });
});
