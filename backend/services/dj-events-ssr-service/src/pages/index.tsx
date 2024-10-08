import GenericLayout from '@/components/GenericLayout';
import { API_URL } from '@/config/index';
import type { Event } from '@/types';
import type { FC } from 'react';

type HomePageProps = {
    events: Event[];
};

const HomePage: FC<HomePageProps> = ({ events }) => {
    console.log(events);
    return (
        <GenericLayout>
            <h1>Hello DJ Events</h1>
        </GenericLayout>
    );
};

export default HomePage;

export const getStaticProps = async () => {
    const res = await fetch(`${API_URL}/api/events`);
    const events = await res.json();

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
