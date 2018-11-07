import React from 'react';
import { mount, shallow } from 'enzyme';
import { Provider } from 'react-redux';

import {
  mockState,
  createMockStore,
} from '../../../src/redux/tests/mocks/Store';

export const findWhereTestidStartsWith = (wrapper, prefix) => {
  return wrapper.findWhere((w) => {
    const testid = w.prop('data-testid');

    if (testid === undefined) return false;
    if (typeof testid !== 'string') return false;

    const ret = testid.startsWith(prefix);

    return ret;
  });
};

export const findByTestid = (wrapper, testid) => {
  return wrapper.find(`[data-testid="${testid}"]`);
};

export const findByUnitTestid = (wrapper, testid) => {
  return wrapper.find(`[testId="${testid}"]`);
};

export const mockSaveWidgetResult = (wrapper) => {
  const saveWidgetResult = (key, data) => {
    wrapper.setProps({
      data,
    });
  };

  wrapper.setProps({ saveWidgetResult });
  return wrapper;
};


export const widgetPropsFromModel = (model) => {
  return {
    data: model,
    saveWidgetResult: () => {}, // should be overwritten
    setOverlayContent: () => {},
    isReadOnly: false,
    playerPositionOffset: {
      top: 0,
      left: 0,
    },
  };
};

const wrapComponentInProvider = (component, store) => {
  return (
    <Provider store={store}>
      {component}
    </Provider>
  );
};

const connectMockStore = (customStore = null) => {
  let defaultMockState = mockState();
  if (customStore) {
    defaultMockState = customStore;
  }

  const store = createMockStore(defaultMockState);
  /*
   * Stub the dispatch function to allow connected components use 'this.props.dispatch' without actually calling redux
   */
  store.dispatch = jest.fn();

  return store;
};

export const shallowWithStore = (component, customStore = null) => {
  const store = connectMockStore(customStore);

  const context = {
    store,
  };

  return shallow(component, { context }).dive();
};

export const mountWithStore = (component, customStore = null) => {
  const store = connectMockStore(customStore);
  const wrappedComponent = wrapComponentInProvider(component, store);

  return mount(wrappedComponent);
};

export const mockPopupRef = {
  getBoundingClientRect: () => ({
    top: 0, left: 0, x: 0, y: 0, width: 100, height: 100, bottom: 0, right: 0,
  }),
};

