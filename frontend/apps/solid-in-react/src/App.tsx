import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/Home';
import SingleResponsibilityPrinciple from './pages/SRP';
import OpenClosedPrinciple from './pages/OCP';
import LiskovSubstitutionPrinciple from './pages/LSP';
import InterfaceSegregationPrinciple from './pages/ISP';
import DependencyInversionPrinciple from './pages/DIP';
import Root from './pages/Root';

const Router = createBrowserRouter(
    [
        {
            path: '/',
            element: <Root />,
            children: [
                {
                    index: true,
                    element: <HomePage />,
                },
                { path: 'srp', element: <SingleResponsibilityPrinciple /> },
                { path: 'ocp', element: <OpenClosedPrinciple /> },
                { path: 'lsp', element: <LiskovSubstitutionPrinciple /> },
                { path: 'isp', element: <InterfaceSegregationPrinciple /> },
                { path: 'dip', element: <DependencyInversionPrinciple /> },
            ],
        },
    ],
    {
        basename: import.meta.env.DEV ? '/apps/solid-in-react/' : `/wbk--mern-playground/apps/solid-in-react/`,
    }
);

function App() {
    return <RouterProvider router={Router} />;
}

export default App;
