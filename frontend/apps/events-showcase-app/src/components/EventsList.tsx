import classes from './EventsList.module.scss';
import { FC } from 'react';
import { EventItemProps } from './EventItem';

type EventsListProps = {
    events: EventItemProps['event'][];
};

const EventsList: FC<EventsListProps> = ({ events }) => {
    return (
        <div className={classes.events}>
            <h1>All Events</h1>
            <ul className={classes.list}>
                {events.map((event) => (
                    <li key={event.id} className={classes.item}>
                        <a href="...">
                            <img src={event.image} alt={event.title} />
                            <div className={classes.content}>
                                <h2>{event.title}</h2>
                                <time>{event.date}</time>
                            </div>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;
