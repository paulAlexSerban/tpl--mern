import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/Home';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL as string;

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <RootLayout />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: 'events',
                    element: <EventsRootLayout />,
                    children: [
                        {
                            index: true,
                            element: <EventsPage />,
                            loader: async () => {
                                const response = await fetch(`${BACKEND_URL}/events`);

                                if (!response.ok) {
                                    // incorect response handling
                                } else {
                                    const resData = await response.json();
                                    return resData.events;
                                }
                            },
                        },
                        { path: ':id', element: <EventDetailPage /> },
                        { path: 'new', element: <NewEventPage /> },
                        { path: ':id/edit', element: <EditEventPage /> },
                    ],
                },
            ],
        },
    ],
    {
        basename: '/',
    }
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
