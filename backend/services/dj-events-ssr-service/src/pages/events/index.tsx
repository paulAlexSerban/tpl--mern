import GenericLayout from '@/components/GenericLayout';
import { PRIVATE_CMS_API_URL } from '@/config/index';
import type { Event } from '@/types';
import type { FC } from 'react';
import EventItem from '@/components/EventItem';

type EventsPageProps = {
    events: Event[];
};

const EventsPage: FC<EventsPageProps> = ({ events }) => {
    return (
        <GenericLayout>
            <h1>Upcoming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {events.map((evt) => (
                <EventItem key={evt.id} event={evt} />
            ))}
        </GenericLayout>
    );
};

export default EventsPage;

export const getStaticProps = async () => {
    const res = await fetch(`${PRIVATE_CMS_API_URL}/events`);
    const resJSON = await res.json();
    const events = resJSON.data;

    return {
        props: { events },
        revalidate: 1,
    };
};

/**
 * Notes
 * - getStaticProps is a function that will be called at build time in production
 *  - used for static site generation as it fetches data at build time
 *
 * - getServerSideProps is a function that will be called at request time
 *  - used for server-side rendering as it fetches data on each request
 */
