import { Login } from '../ui/screens/login';
import { authenticationPageRoutes } from '../application/routes';
import { ForgotPassword } from '../ui/screens/password';
import { SignUp } from '../ui/screens/sign-up';
import GamesList from 'src/domains/games/ui/components/GamesList';

export const authenticationRoutes = [
  {
    path: authenticationPageRoutes.LOGIN,
    exact: true,
    element: <Login />
  },
  {
    path: authenticationPageRoutes.FORGOTPASSWORD,
    exact: true,
    element: <ForgotPassword />
  },
  {
    path: authenticationPageRoutes.SIGNUP,
    exact: true,
    element: <SignUp />
  },
  {
    path: authenticationPageRoutes.GAMES,
    exact: true,
    element: <GamesList />
  }
];
