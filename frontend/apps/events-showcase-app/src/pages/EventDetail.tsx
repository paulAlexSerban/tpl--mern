import { json, LoaderFunction, ActionFunction, useRouteLoaderData, redirect } from 'react-router-dom';
import EventItem from '../components/EventItem';
import { EventItemProps } from '../types';

const EventDetailPage = () => {
    const data = useRouteLoaderData('event-detail') as EventItemProps;

    return <EventItem event={data.event} />;
};

export default EventDetailPage;

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL as string;

// The loader function will fetch the event details from the backen
export const loader: LoaderFunction = async ({ params }) => {
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

export const action: ActionFunction = async ({ params, request }) => {
    const eventId = params.id;
    const response = await fetch(`${BACKEND_URL}/events/${eventId}`, {
        method: request.method,
    });

    if (!response.ok) {
        return json({ message: 'Could not delete event.' }, { status: response.status });
    }

    return redirect('/events');
};
