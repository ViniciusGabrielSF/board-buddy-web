
import { gamesPageRoutes } from '../application/routes';
import Games from '../ui/screens/Games';


export const gamesRoutes = [
  {
    path: gamesPageRoutes.HOME,
    exact: true,
    element: <Games />
  }
];
