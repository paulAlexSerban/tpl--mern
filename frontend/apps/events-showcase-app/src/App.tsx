import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layouts
import RootLayout from './pages/Root';
import EventsRootLayout from './pages/EventsRoot';

// pages
import HomePage from './pages/Home';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventDetailPage, { loader as eventsDetailLoader, action as deleteEventAction } from './pages/EventDetail';
import NewEventPage from './pages/NewEvent';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';

import { action as newEventAction } from './components/EventForm';

const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <RootLayout />,
            errorElement: <ErrorPage />,
            children: [
                { index: true, element: <HomePage /> },
                {
                    path: 'events',
                    element: <EventsRootLayout />,
                    children: [
                        {
                            index: true,
                            element: <EventsPage />,
                            // the loader will delay the rendering of the page until the data is fetched
                            loader: eventsLoader,
                        },
                        {
                            path: ':id',
                            id: 'event-detail',
                            loader: eventsDetailLoader,
                            children: [
                                {
                                    index: true,
                                    element: <EventDetailPage />,
                                    action: deleteEventAction,
                                },
                                {
                                    path: 'edit',
                                    element: <EditEventPage />,
                                },
                            ],
                        },

                        {
                            path: 'new',
                            element: <NewEventPage />,
                            action: newEventAction,
                        },
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
