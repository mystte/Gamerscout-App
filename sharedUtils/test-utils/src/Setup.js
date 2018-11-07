import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// This is to make sure we don't create a redux store (remove when datamanager no longer includes AppConfig)
jest.mock(
  'redux',
  () => ({
    combineReducers: jest.fn(),
    applyMiddleware: jest.fn(),
    compose: () => () => () => ({
    }),
  }),
);

// This consoleSpy is to have test failures on console.error
const consoleErrorSpy = jest.spyOn(console, 'error');

beforeEach(() => {
  consoleErrorSpy.mockClear();
});

afterEach(() => {
  expect(consoleErrorSpy).not.toHaveBeenCalled();
});
