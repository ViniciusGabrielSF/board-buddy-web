import { gamesRoutes } from '../../domains/games/routes/gamesRoutes';
import { authenticationRoutes } from '../../domains/authentication/routes/authenticationRoutes';

export const publicRoutes = [...authenticationRoutes, ...gamesRoutes];
