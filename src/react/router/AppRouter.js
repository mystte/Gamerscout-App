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

const routesConfig = [
  {
    path: getHomeUrl(),
    component: Home,
  },
  {
    path: getGamerDetailsUrl(),
    component: GamerDetails,
  },
];

const AppRouter = () => {
  const renderedRoutes = routesConfig.map((route) => {
    return (
      <Route
        key={`route${route.component}`}
        path={route.path}
        exact
        render={() =>
          (
            <Suspense fallback={<Loading />}>
              <route.component />
            </Suspense>
          )
        }
      />
    );
  });

  return (
    <Router>
      <NavBar />
      <Switch>
        {renderedRoutes}
        <Route component={FourOFour} />
      </Switch>
    </Router>
  );
};

export default AppRouter;