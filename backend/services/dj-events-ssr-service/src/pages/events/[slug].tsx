import GenericLayout from '@/components/GenericLayout';
import { API_URL } from '@/config/index';
import type { Event } from '@/types';
import { GetServerSideProps } from 'next';
import { FC } from 'react';
import styles from '@/styles/eventPage.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { APP_URL } from '@/config';
type EventPageProps = {
    event: Event;
};

const EventPage: FC<EventPageProps> = ({ event }) => {
    const imageSrc = event.image ? event.image : '/dss/images/event-default.png';
    const handleDelete = (e: React.MouseEvent<HTMLAnchorElement>) => {
        console.log('delete', { e });
    };

    return (
        <GenericLayout>
            <div className={styles.event}>
                <div className={styles.controls}>
                    <Link href={`/events/edit/${event.id}`}>
                        <FaPencilAlt />
                        Edit Event
                    </Link>
                    <a href="#" role="button" onClick={handleDelete} className={styles.delete}>
                        <FaTimes />
                        Delete Event
                    </a>
                </div>
                <span>
                    {new Date(event.date).toLocaleDateString('en-US')} at {event.time}
                </span>
                <h1>{event.name}</h1>
                {event.image && (
                    <div className={styles.image}>
                        <Image src={`${APP_URL}${imageSrc}`} width={960} height={600} alt={event.name} unoptimized />
                    </div>
                )}
                <h3>Performers:</h3>
                <p>{event.performers}</p>

                <h3>Description:</h3>
                <p>{event.description}</p>

                <h3>Venue: {event.venue}</h3>
                <p>{event.address}</p>

                <Link className={styles.back} href="/events">
                   {'<'} Go Back
                </Link>
            </div>
        </GenericLayout>
    );
};

export default EventPage;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
    const { slug } = query;

    const res = await fetch(`${API_URL}/events?slug=${slug}`);
    const resJSON = await res.json();

    return {
        props: {
            event: resJSON[0],
        },
    };
};
