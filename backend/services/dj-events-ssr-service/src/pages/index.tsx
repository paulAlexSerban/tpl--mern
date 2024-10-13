import GenericLayout from '@/components/GenericLayout';
import { PRIVATE_CMS_API_URL } from '@/config/index';
import type { Event } from '@/types';
import type { FC } from 'react';
import EventItem from '@/components/EventItem';
import Link from 'next/link';

type HomePageProps = {
    events: Event[];
};

const HomePage: FC<HomePageProps> = ({ events }) => {
    return (
        <GenericLayout>
            <h1>Upcoming Events</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {events.map((evt) => (
                <EventItem key={evt.id} event={evt} />
            ))}
            {events.length > 0 && (
                <Link href="/events" className="btn-secondary">
                    View All Events
                </Link>
            )}
        </GenericLayout>
    );
};

export default HomePage;

export const getStaticProps = async () => {
    const res = await fetch(`${PRIVATE_CMS_API_URL}/events`);
    const responseJSON = await res.json();
    const events = responseJSON.data;

    return {
        props: { events: events.slice(0, 3) },
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
