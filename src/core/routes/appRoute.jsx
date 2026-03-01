import { useRoutes } from 'react-router-dom';
import { dashboardRoute } from '../../dashboard';
import {NotFound} from '../../components/notfound'

export const AppRouter = () => {
  const routes = useRoutes([
    {
      children: [
        ...dashboardRoute,
      ]
    },
    { path: '*', element:<NotFound/> }
  ]);

  return routes;
};