import EventForm from '../components/EventForm';
import { ActionFunction, redirect } from 'react-router-dom';
import { json } from 'react-router-dom';
const NewEvent = () => {
    return <EventForm method="POST" />;
};

export const action: ActionFunction = async ({ request, params }) => {
    const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL as string;
    const data = await request.formData();

    const eventData = {
        title: data.get('title') as string,
        description: data.get('description') as string,
        date: data.get('date') as string,
        image: data.get('image') as string,
    };

    const response = await fetch(`${BACKEND_URL}/events`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(eventData),
    });

    if (!response.ok) {
        throw json({ message: 'Could not save event. Please try again.' }, { status: response.status });
    }

    return redirect('/events');
};

export default NewEvent;
