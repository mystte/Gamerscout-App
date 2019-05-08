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

const AppRouter = () => {
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

  const renderedRoutes = routesConfig.map((route) => {
    return (
      <Route
        key={`route${route.path}`}
        path={route.path}
        exact
        component={route.component}
      />
    );
  });

  return (
    <Router>
      <NavBar />
      <Suspense fallback={<Loading />}>
        <Switch>
          {renderedRoutes}
          <Route component={FourOFour} />
        </Switch>
      </Suspense>
    </Router>
  );
};

export default AppRouter;