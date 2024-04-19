import classes from './EventsList.module.scss';
import { FC } from 'react';
// import { useLoaderData } from 'react-router-dom';
import type { EventsListProps } from '../types';
import { Link } from 'react-router-dom';

const EventsList: FC<EventsListProps> = ({ events }) => {
    // const events = useLoaderData() as EventsListProps['events'];

    return (
        <div className={classes.events}>
            <h1>All Events</h1>
            <ul className={classes.list}>
                {events.map((event) => (
                    <li key={event.id} className={classes.item}>
                        <Link to={`/events/${event.id}`}>
                            <img src={event.image} alt={event.title} />
                            <div className={classes.content}>
                                <h2>{event.title}</h2>
                                <time>{event.date}</time>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;
