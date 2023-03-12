import Dashboard from '../pages/auth/Dashboard';
import SignIn from '../pages/auth/SignIn';
import * as urls from './app-urls';

const routes = [
  {
    path: urls.SIGNIN,
    Element: SignIn,
    isIndexUrl: true,
    isProtected: false,
  },
  {
    path: urls.DASHBOARD,
    Element: Dashboard,
    isIndexUrl: false,
    isProtected: true,
  },
];

export default routes;
