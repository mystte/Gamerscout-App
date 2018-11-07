import React from 'react';
import { mount } from 'enzyme';

// utils
import '../../../../sharedUtils/test-utils/src/Setup';

import UniversalView from '../src/UniversalView';

describe('UniversalView', () => {
  it('can instanciate UniversalView', () => {
    const wrapper = mount(<UniversalView />);
    expect(wrapper).not.toBeFalsy();
  });

  it('with transformation', () => {
    const defaultProps = {
      transform: [{ rotateX: '45deg' }, { rotateY: '45deg' }],
    };

    const wrapper = mount(<UniversalView {...defaultProps} />);
    const style = wrapper.find('div').prop('style');
    expect(style.transform).toBe('rotateX(45deg)rotateY(45deg)');
  });


  it('with pointerEvents', () => {
    const defaultProps = {
      pointerEvents: 'none',
    };

    const wrapper = mount(<UniversalView {...defaultProps} />);
    const style = wrapper.find('div').prop('style');
    expect(style.pointerEvents).toBe('none');
  });

  it('with dropshadow', () => {
    const defaultProps = {
      dropShadow: {
        shadowColor: 'black',
        shadowOffset: {
          width: 15,
          height: 15,
        },
        shadowOpacity: 0.5,
        shadowRadius: 5,
      },
    };

    const wrapper = mount(<UniversalView {...defaultProps} />);
    const style = wrapper.find('div').prop('style');
    expect(style.filter).toBe('drop-shadow(15px 15px 5px rgba(0, 0, 0, 0.5))');
  });
});
