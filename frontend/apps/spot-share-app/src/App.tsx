import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';
import { useMemo, lazy, Suspense } from 'react';

import Root from './root/Root';
import LoadingSpinner from './shared/components/UIElements/LoadingSpinner';
import { AuthContext } from './shared/context/auth-context';
import { useAuth } from './shared/hooks/auth-hook';

const Users = lazy(() => import('./users/pages/Users'));
const NewPlace = lazy(() => import('./places/pages/NewPlace'));
const UserPlaces = lazy(() => import('./places/pages/UserPlaces'));
const UpdatePlace = lazy(() => import('./places/pages/UpdatePlace'));
const Auth = lazy(() => import('./users/pages/Auth'));

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

            <Suspense fallback={
                <div className='center'>
                    <LoadingSpinner />
                </div>
            }>
                <RouterProvider router={router} />
            </Suspense>

        </AuthContext.Provider>
    );
}

export default App;
