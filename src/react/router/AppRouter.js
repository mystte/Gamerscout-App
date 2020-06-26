import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QueryParamProvider } from 'use-query-params';
import PropTypes from 'prop-types';

import Loading from '../components/views/loading/Loading';
import NavBar from '../components/containers/navbar/NavBar';
import FourOFour from '../components/containers/fourofour/FourOFour';
import {
  getHomeUrl,
  getGamerDetailsUrl,
  getSettingsUrl,
  getValidateAccountUrl,
  getValidatePasswordUrl,
  getPrivacyPolicyUrl,
  getTermsAndConditionsUrl,
  getValorantHomeUrl,
  getLolHomeUrl,
} from '../config/routes';
import NotificationsManager from '../components/containers/notifiationsmanager/NotificationsManager';
import ValidatePassword from '../components/containers/validatepassword/ValidatePassword';
import TermsAndConditions from '../components/containers/termsandconditions/TermsAndConditions';
import PrivacyPolicy from '../components/containers/privacypolicy/PrivacyPolicy';
import ValorantHome from '../components/containers/valoranthome/ValorantHome';
import LolHome from '../components/containers/lolhome/LolHome';

const Home = React.lazy(() => import('../components/containers/home/Home'));
const GamerDetails = React.lazy(() =>
  import('../components/containers/gamerdetails/GamerDetails')
);
const Settings = React.lazy(() =>
  import('../components/containers/settings/Settings')
);
const ValidateAccount = React.lazy(() =>
  import('../components/containers/validateaccount/ValidateAccount')
);

const AppRouter = ({ cookies }) => {
  const routesConfig = [
    {
      path: getHomeUrl(),
      component: Home,
    },
    {
      path: getLolHomeUrl(),
      component: LolHome,
    },
    {
      path: getValorantHomeUrl(),
      component: ValorantHome,
    },
    {
      path: getSettingsUrl(),
      component: Settings,
    },
    {
      path: getGamerDetailsUrl(),
      component: GamerDetails,
    },
    {
      path: getValidateAccountUrl(),
      component: ValidateAccount,
    },
    {
      path: getValidatePasswordUrl(),
      component: ValidatePassword,
    },
    {
      path: getPrivacyPolicyUrl(),
      component: PrivacyPolicy,
    },
    {
      path: getTermsAndConditionsUrl(),
      component: TermsAndConditions,
    },
  ];

  const renderedRoutes = routesConfig.map(route => (
    <Route
      cookies={cookies}
      key={`route${route.path}`}
      path={route.path}
      exact
      component={route.component}
    />
  ));

  return (
    <Router>
      <QueryParamProvider ReactRouterRoute={Route}>
        <NavBar />
        <NotificationsManager />
        <Suspense fallback={<Loading />}>
          <Switch>
            {renderedRoutes}
            <Route component={FourOFour} />
          </Switch>
        </Suspense>
      </QueryParamProvider>
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
