import { useNavigate, Form } from 'react-router-dom';
import { FC } from 'react';
import classes from './EventForm.module.scss';
import { EventItemProps } from '../types';

type EventFormProps = {
    method: 'POST' | 'PUT';
    event?: EventItemProps['event'];
};

const EventForm: FC<EventFormProps> = ({ method, event }) => {
    const navigate = useNavigate();
    function cancelHandler() {
        navigate('..');
    }

    return (
        <Form className={classes.form} method={method}>
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
                <button>Save</button>
            </div>
        </Form>
    );
};

export default EventForm;
