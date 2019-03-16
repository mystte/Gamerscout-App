import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from '../components/containers/home/Home';
import FourOFour from '../components/containers/fourOFour/FourOFour';

import {
  APP_URL_BASE,
} from '../config/routes';

const AppRouter = () => (
  <Router>
    <Switch>
      <Route path={APP_URL_BASE} exact component={Home} />
      <Route component={FourOFour} />
    </Switch>
  </Router>
);

export default AppRouter;