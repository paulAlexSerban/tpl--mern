import GenericLayout from '@/components/GenericLayout';
import { PRIVATE_CMS_API_URL } from '@/config/index';
import type { Event } from '@/types';
import type { FC } from 'react';
import EventItem from '@/components/EventItem';
import { GetServerSideProps } from 'next';
import qs from 'qs';
import { useRouter } from 'next/router';
import Link from 'next/link';

type SearchPageProps = {
    events: Event[];
};

const SearchPage: FC<SearchPageProps> = ({ events }) => {
    const router = useRouter();
    const term = router.query.term as string;
    return (
        <GenericLayout title="Search Results">
            <Link href="/events">{'<'} Go back</Link>
            <h1>Search Results for {term}</h1>
            {events.length === 0 && <h3>No events to show</h3>}
            {events.map((evt) => (
                <EventItem key={evt.id} event={evt} />
            ))}
        </GenericLayout>
    );
};

export default SearchPage;

type Query = {
    term: string;
};

export const getServerSideProps: GetServerSideProps<SearchPageProps, Query> = async ({ query: { term } }) => {
    const query = qs.stringify(
        {
            filters: {
                $or: [
                    { name: { $containsi: term } },
                    { performers: { $containsi: term } },
                    { description: { $containsi: term } },
                    { venue: { $containsi: term } },
                ],
            },
        },
        { encode: false }
    );

    const res = await fetch(`${PRIVATE_CMS_API_URL}/events?${query}&populate=*`);
    const resJSON = await res.json();
    const events = resJSON.data;

    return {
        props: { events },
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
