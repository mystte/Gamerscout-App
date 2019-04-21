import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Loading from '../components/views/loading/Loading';
import NavBar from '../components/containers/navbar/NavBar'

const Home = React.lazy(() => import('../components/containers/home/Home'));
const GamerDetails = React.lazy(() => import('../components/containers/gamerdetails/GamerDetails'));
import FourOFour from '../components/containers/fourofour/FourOFour';

import {
  getHomeUrl,
  getGamerDetailsUrl,
} from '../config/routes';

const AppRouter = () => (
  <Router>
    <NavBar />
    <Switch>
      <Route path={getHomeUrl()} exact render={() => (
        <Suspense fallback={<Loading/>}>
          <Home/>
        </Suspense>
      )} />
      <Route path={getGamerDetailsUrl()} exact render={() => (
        <Suspense fallback={<Loading />}>
          <GamerDetails />
        </Suspense>
      )} />
      <Route component={FourOFour} />
    </Switch>
  </Router>
);

export default AppRouter;