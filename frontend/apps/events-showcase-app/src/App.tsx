import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layouts
import EventsRootLayout from './pages/EventsRoot';
import RootLayout from './pages/Root';

// pages
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import NewsletterPage from './pages/Newsletter';

// page actions
import { loader as eventsLoader } from './pages/Events';
import { loader as eventDetailLoader } from './pages/EventDetail';

// component actions
import { action as deleteEventAction } from './pages/EventDetail';
import { action as manipulateEventAction } from './components/EventForm';
import { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
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
                        loader: eventsLoader,
                    },
                    {
                        path: ':id',
                        id: 'event-detail',
                        loader: eventDetailLoader,
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: deleteEventAction,
                            },
                            {
                                path: 'edit',
                                element: <EditEventPage />,
                                action: manipulateEventAction,
                            },
                        ],
                    },
                    {
                        path: 'new',
                        element: <NewEventPage />,
                        action: manipulateEventAction,
                    },
                ],
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
