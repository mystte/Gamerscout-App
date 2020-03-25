import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { CookiesProvider } from 'react-cookie';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ReactGA from 'react-ga';

import store from './redux/configureStore';
import ErrorBoundary from './components/containers/errorboundary/ErrorBoundary';
import AppBootstrap from './AppBootstrap';
import { colorNameToHex } from './utils/color';
import '../style.scss';

// Used for font awesome
library.add(faTimes);

const styles = {
  container: {
    position: 'relative',
    color: colorNameToHex('white'),
  },
};

ReactGA.initialize('UA-113317255-01');
ReactGA.pageview(window.location.pathname + window.location.search);

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="app" style={styles.container}>
        <ErrorBoundary>
          <CookiesProvider>
            <Provider store={store}>
              <AppBootstrap />
            </Provider>
          </CookiesProvider>
        </ErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
