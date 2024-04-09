import { useLoaderData } from 'react-router-dom';
import EventsList from '../components/EventsList';

type Event = {
    id: string;
    title: string;
    description: string;
    date: string;
    image: string;
};

function EventsPage() {
    const fetchedEvents = useLoaderData() as Event[];

    return (
        <>
            <EventsList events={fetchedEvents} />
        </>
    );
}

export default EventsPage;
