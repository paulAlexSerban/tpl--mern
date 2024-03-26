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
    const [token, setToken] = useState<string | null>(null);
    const [userId, setUserId] = useState<string | null>(null);

    const login = useCallback((uid: string, token: string) => {
        setUserId(uid);
        setToken(token);
    }, []);

    const logout = useCallback(() => {
        setUserId(null);
        setToken(null);
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
