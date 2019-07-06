import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PropTypes from 'prop-types';

import Loading from '../components/views/loading/Loading';
import NavBar from '../components/containers/navbar/NavBar'
import FourOFour from '../components/containers/fourofour/FourOFour';
import {
  getHomeUrl,
  getGamerDetailsUrl,
  getSettingsUrl,
} from '../config/routes';
import NotificationsManager from "../components/containers/notifiationsmanager/NotificationsManager";

const Home = React.lazy(() => import('../components/containers/home/Home'));
const GamerDetails = React.lazy(() => import('../components/containers/gamerdetails/GamerDetails'));
const Settings = React.lazy(() => import('../components/containers/settings/Settings'));

const AppRouter = ({ cookies }) => {
  const routesConfig = [
    {
      path: getHomeUrl(),
      component: Home,
    },
    {
      path: getSettingsUrl(),
      component: Settings,
    },
    {
      path: getGamerDetailsUrl(),
      component: GamerDetails,
    },
  ];

  const renderedRoutes = routesConfig.map((route) => {
    return (
      <Route
        cookies={cookies}
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
      <NotificationsManager />
      <Suspense fallback={<Loading />}>
        <Switch>
          {renderedRoutes}
          <Route component={FourOFour} />
        </Switch>
      </Suspense>
    </Router>
  );
};

AppRouter.propTypes = {
  cookies: PropTypes.object,
};

AppRouter.defaultProps = {
  cookies: null,
};

export default AppRouter;
