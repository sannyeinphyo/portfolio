import { useRoutes } from 'react-router-dom';
import { dashboardRoute } from '../../dashboard';

export const AppRouter = () => {
  const routes = useRoutes([
    {
      children: [
        ...dashboardRoute,
      ]
    },
    { path: '*', element: <div>Page Not Found</div> }
  ]);

  return routes;
};