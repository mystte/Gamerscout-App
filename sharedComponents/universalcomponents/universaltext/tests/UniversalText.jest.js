import React from 'react';
import { mount } from 'enzyme';

// utils
import '../../../../sharedUtils/test-utils/src/Setup';

import UniversalText from '../src/UniversalText';

describe('UniversalText', () => {
  const defaultProps = {

  };

  it('can instanciate UniversalText', () => {
    const wrapper = mount(<UniversalText {...defaultProps} />);
    expect(wrapper).not.toBeFalsy();
  });

  it('can instanciate UniversalText with Ellipsis', () => {
    const wrapper = mount(<UniversalText {...defaultProps} numberOfLines={1} style={{ width: 60, backgroundColor: 'red' }} />);
    expect(wrapper).not.toBeFalsy();
    const style = wrapper.find('span').prop('style');
    expect(style.backgroundColor).toBe('red');
    expect(style.textOverflow).toBe('ellipsis');
  });

  it('can instanciate UniversalText not selectable', () => {
    const wrapper = mount(<UniversalText {...defaultProps} selectable={false} />);
    expect(wrapper).not.toBeFalsy();
    const style = wrapper.find('span').prop('style');
    expect(style.userSelect).toBe('none');
  });

  it('can instanciate UniversalText with transforms', () => {
    const transform = {
      transform: [{ rotateX: '45deg' }, { rotateY: '45deg' }],
    };
    const wrapper = mount(<UniversalText {...defaultProps} {...transform} selectable={false} />);
    const style = wrapper.find('span').prop('style');
    expect(style.transform).toBe('rotateX(45deg)rotateY(45deg)');
  });

  it('can instanciate UniversalText with textUnderline', () => {
    const wrapper = mount(<UniversalText {...defaultProps} textUnderline selectable={false} />);
    const style = wrapper.find('span').prop('style');
    expect(style.textDecoration).toBe('underline');
  });
});
