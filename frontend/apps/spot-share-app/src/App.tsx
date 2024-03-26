import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useMemo } from 'react';

import Root from './root/Root';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';

import { AuthContext } from './shared/context/auth-context';

import { useAuth } from './shared/hooks/auth-hook';

function App() {
    const { token, login, logout, userId } = useAuth();

    const router = useMemo(
        () =>
            createBrowserRouter(
                [
                    {
                        path: '/',
                        element: <Root />,
                        children: [
                            { index: true, element: <Users /> },
                            { path: '/:uid/places', element: <UserPlaces /> },
                            ...(token
                                ? [
                                      { path: '/places/new', element: <NewPlace /> },
                                      { path: '/places/:pid', element: <UpdatePlace /> },
                                  ]
                                : [{ path: '/auth', element: <Auth /> }]),
                        ],
                    },
                    // Fallback route
                    { path: '*', element: <Navigate to={token ? '/' : '/auth'} replace /> },
                ],
                {
                    basename: import.meta.env.DEV ? '/' : `/`,
                }
            ),
        [token]
    );

    return (
        <AuthContext.Provider value={{ isLoggedIn: !!token, token, login, logout, userId }}>
            <RouterProvider router={router} />
        </AuthContext.Provider>
    );
}

export default App;
