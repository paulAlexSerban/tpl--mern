import { useNavigate } from 'react-router-dom';
import { FC } from 'react';
import classes from './EventForm.module.scss';
import { EventItemProps } from './EventItem';

type EventFormProps = {
    method: 'POST' | 'PUT';
    event?: EventItemProps['event'];
};

const EventForm: FC<EventFormProps> = ({ method, event }) => {
    const navigate = useNavigate();
    function cancelHandler() {
        navigate('..');
    }

    console.log(event);
    console.log(method);

    return (
        <form className={classes.form}>
            <p>
                <label htmlFor="title">Title</label>
                <input id="title" type="text" name="title" required />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input id="image" type="url" name="image" required />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input id="date" type="date" name="date" required />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea id="description" name="description" rows={5} required />
            </p>
            <div className={classes.actions}>
                <button type="button" onClick={cancelHandler}>
                    Cancel
                </button>
                <button>Save</button>
            </div>
        </form>
    );
};

export default EventForm;
