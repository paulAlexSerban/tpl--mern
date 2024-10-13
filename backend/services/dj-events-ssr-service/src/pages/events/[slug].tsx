import GenericLayout from '@/components/GenericLayout';
import { PRIVATE_CMS_API_URL, PUBLIC_APP_URL } from '@/config/index';
import type { Event } from '@/types';
import { GetServerSideProps } from 'next';
import { FC, useEffect, useState } from 'react';
import styles from '@/styles/eventPage.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import { FaPencilAlt, FaTimes } from 'react-icons/fa';
import { sl } from 'date-fns/locale';

type EventPageProps = {
    event: Event;
};

const EventPage: FC<EventPageProps> = ({ event }) => {
    const [dateTime, setDateTime] = useState<string>('');
    const eventAttributes = event.attributes;
    const eventName = eventAttributes.name;
    const eventDate = eventAttributes.date;
    const eventTime = eventAttributes.time;
    const eventImage = eventAttributes.image.data.attributes;
    const eventSlug = eventAttributes.slug;
    const eventPerformers = eventAttributes.performers;
    const eventDescription = eventAttributes.description[0].children[0].text;
    const eventVenue = eventAttributes.venue;
    const eventAddress = eventAttributes.address;
    const eventImageUrl = eventImage.formats.large.url;
    const imageSrc = eventImageUrl ? eventImageUrl : '/dss/images/event-default.png';

    const handleDelete = (e: React.MouseEvent<HTMLAnchorElement>) => {
        console.log('delete', { e });
    };

    useEffect(() => {
        const date = new Date(eventDate).toLocaleDateString('en-US');
        const time = eventTime;
        setDateTime(`${date} at ${time}`);
    }, [eventDate, eventTime]);

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
                <span>{dateTime}</span>
                <h1>{eventName}</h1>
                {imageSrc && (
                    <div className={styles.image}>
                        <Image
                            src={`${PUBLIC_APP_URL}/cms${imageSrc}`}
                            width={960}
                            height={600}
                            alt={eventName}
                            unoptimized
                        />
                    </div>
                )}
                <h3>Performers:</h3>
                <p>{eventPerformers}</p>

                <h3>Description:</h3>
                <p>{eventDescription}</p>

                <h3>Venue: {eventVenue}</h3>
                <p>{eventAddress}</p>

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

    const res = await fetch(`${PRIVATE_CMS_API_URL}/events?filters[slug][$eq]=${slug}&populate=*`);
    const resJSON = await res.json();
    const event = resJSON.data[0];

    return {
        props: {
            event,
        },
    };
};
