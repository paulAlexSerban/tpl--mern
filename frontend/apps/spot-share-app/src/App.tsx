import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import Root from './root/Root';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                { index: true, element: <Users /> },
                {
                    path: '/places/new',
                    element: <NewPlace />,
                },
                {
                    path: '/:uid/places',
                    element: <UserPlaces />,
                },
            ],
        },

        {
            path: '*',
            element: <Navigate to="/" replace />,
        },
    ],
    {
        basename: import.meta.env.DEV ? '/' : `/`,
    }
);

function App() {
    return <RouterProvider router={Router} />;
}

export default App;
