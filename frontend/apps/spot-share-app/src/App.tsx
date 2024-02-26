import { RouterProvider, createBrowserRouter, Navigate } from 'react-router-dom';

import Users from './users/pages/Users';
import NewPlace from './places/pages/NewPlace';
import './App.css';

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Users />,
        },
        {
            path: '/places/new',
            element: <NewPlace />,
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
