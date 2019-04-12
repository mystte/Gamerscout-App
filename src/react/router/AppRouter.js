import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from '../components/views/loading/Loading';
import NavBar from '../components/containers/navbar/NavBar'

const Home = React.lazy(() => import('../components/containers/home/Home'));
import FourOFour from '../components/containers/fourofour/FourOFour';

import {
  APP_URL_BASE,
} from '../config/routes';

const AppRouter = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path={APP_URL_BASE} exact render={() => (
        <Suspense fallback={<Loading/>}>
          <Home/>
        </Suspense>)}
      />
      <Route component={FourOFour} />
    </Switch>
  </Router>
);

export default AppRouter;