import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// layouts
import EventsRootLayout from './pages/EventsRoot';
import RootLayout from './pages/Root';

// pages
import AuthenticationPage from './pages/Authentication';
import EditEventPage from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventsPage from './pages/Events';
import EventDetailPage from './pages/EventDetail';
import HomePage from './pages/Home';
import NewEventPage from './pages/NewEvent';
import NewsletterPage from './pages/Newsletter';

// route laders
import { loader as eventsLoader } from './pages/Events';
import { loader as eventDetailLoader } from './pages/EventDetail';
import { tokenLoader, checkAuthLoader } from './util/auth';

// route actions
import { action as authAction } from './pages/Authentication';
import { action as deleteEventAction } from './pages/EventDetail';
import { action as logoutAction } from './pages/Logout';
import { action as manipulateEventAction } from './components/EventForm';
import { action as newsletterAction } from './pages/Newsletter';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        id: 'root',
        // this will be called on every navigation action
        loader: tokenLoader,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: 'auth',
                element: <AuthenticationPage />,
                action: authAction,
            },
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
                                loader: checkAuthLoader,
                            },
                        ],
                    },
                    {
                        path: 'new',
                        element: <NewEventPage />,
                        action: manipulateEventAction,
                        loader: checkAuthLoader,
                    },
                ],
            },
            {
                path: 'newsletter',
                element: <NewsletterPage />,
                action: newsletterAction,
            },
            {
                path: 'logout',
                action: logoutAction,
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
