import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

// CSS
import 'normalize.css';
import '../src/assets/css/activity.less';

import ActivityEditor from '../src';

import store from '../src/redux/configureStore';

const App = () => (
  <Provider store={store}>
    <ActivityEditor />
  </Provider>
);

App.propTypes = {
};

ReactDOM.render(
  <App />,
  document.getElementById('activity-content'),
);
