import { json } from 'react-router-dom';
import { Event } from '../types';

const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL as string;

export const loadEvents = async () => {
    const response = await fetch(`${BACKEND_URL}/events`); // Ensure the endpoint is correct

    if (!response.ok) {
        // Throw an error object with a 'message' property
        // throw new Response(JSON.stringify({ message: 'Could not fetch events' }), { status: response.status });
        return json({ message: 'Could not fetch events' }, { status: response.status });
    } else {
        // // Make sure to return JSON data, matching the expected type
        // const events: Event[] = await response.json();
        // return events; // This matches the EventsListProps type
        const resData = await response.json();
        const events: Event[] = resData.events;
        return events; // Return the events as an object
    }
};

export const loadEvent = async (id: string) => {
    // Ensure that 'id' exists in 'params'
    const eventId = id;
    if (!eventId) {
        // Respond with an error if 'id' is not provided in the parameters
        return json({ message: 'Event ID is required' }, { status: 400 });
    }

    const response = await fetch(`${BACKEND_URL}/events/${eventId}`);

    if (!response.ok) {
        return json({ message: 'Could not fetch details for selected event' }, { status: response.status });
    } else {
        // // Optionally, you can typecast the response if you have a specific Event type
        // const event = await response.json();
        // return json(event);
        const resData = await response.json();
        const event = resData.event;
        return event;
    }
};
