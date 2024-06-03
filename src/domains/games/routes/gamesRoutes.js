import { gamesPageRoutes } from '../application/routes';
import { Editgames } from '../ui/screens/edit/Editgames';

export const gamesRoutes = [
  {
    path: gamesPageRoutes.GET,
    exact: true,
    element: <Editgames />
  }
];
