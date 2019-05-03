import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';

import ErrorBoundary from './components/containers/errorboundary/ErrorBoundary';
import AppRouter from './router/AppRouter';
import { colorNameToHex } from './utils/color';
import '../style.scss';

const styles = {
  container: {
    position: 'relative',
    color: colorNameToHex('white'),
  },
};

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log("#### ComponentDidMount");
  }

  render() {
    return (
      <div id="app" style={styles.container}>
        <ErrorBoundary>
          <Provider store={store}>
            <AppRouter />
          </Provider>
        </ErrorBoundary>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));

export default App;
