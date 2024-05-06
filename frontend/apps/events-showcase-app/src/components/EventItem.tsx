import classes from './EventItem.module.scss';
import { FC } from 'react';
import type { EventItemProps } from '../types';
import { Link, useSubmit, useRouteLoaderData } from 'react-router-dom';

const EventItem: FC<EventItemProps> = ({ event }) => {
    const submit = useSubmit();
    const token = useRouteLoaderData('root') as { token: string } | null;
    function startDeleteHandler() {
        const proceed = window.confirm('Are you sure you want to delete this event?');

        if (proceed) {
            submit(null, { method: 'DELETE' });
        }
    }

    return (
        <article className={classes.event}>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            {token && (
                <menu className={classes.actions}>
                    <Link to="edit">Edits</Link>
                    <button onClick={startDeleteHandler}>Delete</button>
                </menu>
            )}
        </article>
    );
};

export default EventItem;
