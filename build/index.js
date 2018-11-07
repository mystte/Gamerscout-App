import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// CSS
import 'normalize.css';
import '../src/assets/css/app.less';

import AppRoot from '../src';

import store from '../src/redux/configureStore';

const App = () => (
  <Provider store={store}>
    <AppRoot />
  </Provider>
);

App.propTypes = {
};

ReactDOM.render(
  <App />,
  document.getElementById('app-content'),
);
