import { json, LoaderFunction, useLoaderData } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { EventItemProps } from '../types';

const EventDetailPage = () => {
    const data = useLoaderData() as EventItemProps;

    return <EventItem event={data.event} />;
};

export default EventDetailPage;

// The loader function will fetch the event details from the backen
export const loader: LoaderFunction = async ({ params }) => {
    const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL as string;

    // Ensure that 'id' exists in 'params'
    const eventId = params.id;
    if (!eventId) {
        // Respond with an error if 'id' is not provided in the parameters
        return json({ message: 'Event ID is required' }, { status: 400 });
    }

    const response = await fetch(`${BACKEND_URL}/events/${eventId}`);

    if (!response.ok) {
        return json({ message: 'Could not fetch details for selected event' }, { status: response.status });
    } else {
        // Optionally, you can typecast the response if you have a specific Event type
        const event = await response.json();
        return json(event);
    }
};
