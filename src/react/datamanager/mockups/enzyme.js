import { shallow } from 'enzyme';
import mockStore from '../mockups/mockStore';
import { createMockStore } from 'redux-test-utils';

const shallowWithStore = component => {
  return shallow(component, createMockStore(mockStore));
};

export default shallowWithStore;
