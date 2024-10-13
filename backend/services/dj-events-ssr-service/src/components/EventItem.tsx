import { FC, useEffect, useState } from 'react';
import type { Event } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/eventItem.module.scss';
import { PUBLIC_APP_URL } from '@/config';

type EventItemProps = {
    event: Event;
};

const EventItem: FC<EventItemProps> = ({ event }) => {
    const [dateTime, setDateTime] = useState<string>('');

    const eventAttributes = event.attributes;
    const eventName = eventAttributes.name;
    const eventDate = eventAttributes.date;
    const eventTime = eventAttributes.time;
    const eventImage = eventAttributes.image.data.attributes;
    const eventSlug = eventAttributes.slug;
    const imageSrc = eventImage.formats.thumbnail.url
        ? eventImage.formats.thumbnail.url
        : '/dss/images/event-default.png';

    useEffect(() => {
        const date = new Date(eventDate).toLocaleDateString('en-US');
        const time = eventTime;
        setDateTime(`${date} at ${time}`);
    }, [eventDate, eventTime]);
    
    return (
        <div className={styles.event}>
            <div className={styles.img}>
                <Image
                    src={`${PUBLIC_APP_URL}/cms${imageSrc}`}
                    width={170}
                    height={100}
                    alt={eventName}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className={styles.info}>
                <span>{dateTime}</span>
                <h3>{eventName}</h3>
            </div>

            <div className={styles.link}>
                <Link className="btn" href={`/events/${eventSlug}`}>
                    Details
                </Link>
            </div>
        </div>
    );
};

export default EventItem;
