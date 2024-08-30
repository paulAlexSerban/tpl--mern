import { useNavigate, Form, useNavigation, useActionData, ActionFunction, redirect, json } from 'react-router-dom';
import { FC } from 'react';
import classes from './EventForm.module.scss';
import { EventItemProps } from '../types';
import { getAuthToken } from '../util/auth';
type EventFormProps = {
    method: 'POST' | 'PATCH';
    event?: EventItemProps['event'];
};

const EventForm: FC<EventFormProps> = ({ method, event }) => {
    const navigate = useNavigate();
    const navigation = useNavigation();
    // gives us access to the data that was passed to the action function
    const data = useActionData() as { errors: { [key: string]: string } };

    const isSubmitting = navigation.state === 'submitting';

    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form className={classes.form} method={method}>
            {data && data.errors && (
                <ul>
                    {Object.values(data.errors).map((error) => (
                        <li key={error}>{error}</li>
                    ))}
                </ul>
            )}
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" required defaultValue={event?.title && event.title} />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" required defaultValue={event?.image && event.image} />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" required defaultValue={event?.date && event.date} />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows={5} required defaultValue={event?.description} />
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Save'}</button>
            </div>
        </Form>
    );
};

export default EventForm;

export const action: ActionFunction = async ({ request, params }) => {
    const BACKEND_URL = import.meta.env.VITE_APP_BACKEND_URL;
    const data = await request.formData();
    const method = request.method;

    const eventData = {
        title: data.get('title') as string,
        description: data.get('description') as string,
        date: data.get('date') as string,
        image: data.get('image') as string,
    };

    let url = `${BACKEND_URL}/events`;

    if (method === 'PATCH') {
        const id = params.id;
        url += `/${id}`;
    }
    const token = getAuthToken();
    const response = await fetch(url, {
        method,
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(eventData),
    });

    if (response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: 'Could not save event. Please try again.' }, { status: response.status });
    }

    return redirect('/events');
};
