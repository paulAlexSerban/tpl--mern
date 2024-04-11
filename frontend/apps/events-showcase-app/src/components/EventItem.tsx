import classes from './EventItem.module.scss';
import { FC } from 'react';
import type { EventItemProps } from '../types';

const EventItem: FC<EventItemProps> = ({ event }) => {
    console.log(event);
    function startDeleteHandler() {
        // ...
    }

    return (
        <article className={classes.event}>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            <menu className={classes.actions}>
                <a href="edit">Edit</a>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
};

export default EventItem;