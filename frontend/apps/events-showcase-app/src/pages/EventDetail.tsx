import { json, LoaderFunction, ActionFunction, useRouteLoaderData, redirect, defer, Await } from 'react-router-dom';
import EventItem from '../components/EventItem';
import EventsList from '../components/EventsList';
import { EventItemProps, EventsListProps } from '../types';
import { loadEvents, loadEvent } from './Events.loaders';
import { Suspense } from 'react';
import { getAuthToken } from '../util/auth';
type CombinedEventData = EventItemProps & EventsListProps;

const EventDetailPage = () => {
    // Explicitly tell TypeScript that the data includes both `event` and `events`
    const data = useRouteLoaderData('event-detail') as CombinedEventData;

    return (
        <>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={data.event}>
                    {(loadedEvent) => {
                        return <EventItem event={loadedEvent} />;
                    }}
                </Await>
            </Suspense>
            <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
                <Await resolve={data.events}>
                    {(loadedEvents) => {
                        return <EventsList events={loadedEvents} />;
                    }}
                </Await>
            </Suspense>
        </>
    );
};

export default EventDetailPage;

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;

// The loader function will fetch the event details from the backend
export const loader: LoaderFunction = async ({ params }) => {
    const { id } = params;
    if (!id) {
        return json({ message: 'Event ID is required' }, { status: 400 });
    }
    return defer({
        // adding await to tell which data to wait for and which to load in parallel being deferred
        event: await loadEvent(id),
        events: loadEvents(),
    });
};

export const action: ActionFunction = async ({ params, request }) => {
    const eventId = params.id;
    const token = getAuthToken();
    const response = await fetch(`${BACKEND_URL}/events/${eventId}`, {
        method: request.method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
    });

    if (!response.ok) {
        return json({ message: 'Could not delete event.' }, { status: response.status });
    }

    return redirect('/events');
};
