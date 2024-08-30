import { useLoaderData, Await, defer, LoaderFunction } from 'react-router-dom';
import { loadEvents } from './Events.loaders';
import EventsList from '../components/EventsList';
import type { EventsListProps } from '../types';
import { Suspense } from 'react';

// Correct the typo in the type definition
type LoaderData = EventsListProps | { message: string };

const EventsPage = () => {
    const data = useLoaderData() as LoaderData; // Cast the data to the correct type

    // Check if the data contains an error message
    if ('message' in data) {
        return <div>Error: {data.message}</div>;
    }

    return (
        <Suspense fallback={<p style={{ textAlign: 'center' }}>Loading...</p>}>
            <Await resolve={data.events}>
                {(loadedEvents) => {
                    return <EventsList events={loadedEvents} />;
                }}
            </Await>
        </Suspense>
    );
};

export default EventsPage;

export const loader: LoaderFunction = () => {
    return defer({
        events: loadEvents(),
    });
};
