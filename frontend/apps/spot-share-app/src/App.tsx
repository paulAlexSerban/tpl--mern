import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useState, useCallback, useMemo } from 'react';

import Root from './root/Root';
import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import UserPlaces from './places/pages/UserPlaces';
import UpdatePlace from './places/pages/UpdatePlace';
import Auth from './users/pages/Auth';

import { AuthContext } from './shared/context/auth-context';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const login = useCallback(() => {
        setIsLoggedIn(true);
    }, []);

    const logout = useCallback(() => {
        setIsLoggedIn(false);
    }, []);

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
                            ...(isLoggedIn
                                ? [
                                      { path: '/places/new', element: <NewPlace /> },
                                      { path: '/places/:placeId', element: <UpdatePlace /> },
                                  ]
                                : [{ path: '/auth', element: <Auth /> }]),
                        ],
                    },
                    // Fallback route
                    { path: '*', element: <Navigate to={isLoggedIn ? '/' : '/auth'} replace /> },
                ],
                {
                    basename: import.meta.env.DEV ? '/' : `/`,
                }
            ),
        [isLoggedIn]
    );

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            <RouterProvider router={router} />
        </AuthContext.Provider>
    );
}

export default App;
