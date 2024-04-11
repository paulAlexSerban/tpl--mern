import { useLoaderData, json } from 'react-router-dom';
import EventsList from '../components/EventsList';
import type { Event, EventsListProps } from '../types';

// Correct the typo in the type definition
type LoaderData = EventsListProps | { message: string };

const EventsPage = () => {
    const data = useLoaderData() as LoaderData; // Cast the data to the correct type

    // Check if the data contains an error message
    if ('message' in data) {
        return <div>Error: {data.message}</div>;
    }
    // Since you're now sure there's no error, you can directly use data.events
    return (
        <>
            <EventsList events={data.events} />
        </>
    );
};

export default EventsPage;

export const loader = async () => {
    const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL as string;
    const response = await fetch(`${BACKEND_URL}/events`); // Ensure the endpoint is correct

    if (!response.ok) {
        // Throw an error object with a 'message' property
        // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), { status: response.status });
        return json({ message: 'Could not fetch events' }, { status: response.status });
    } else {
        // Make sure to return JSON data, matching the expected type
        const events: Event[] = await response.json();
        return events; // This matches the EventsListProps type
    }
};
