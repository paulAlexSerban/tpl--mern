import { FC } from 'react';
import type { Event } from '@/types';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles/eventItem.module.scss';
import { PUBLIC_APP_URL } from '@/config';

type EventItemProps = {
    event: Event;
};

const EventItem: FC<EventItemProps> = ({ event }) => {
    const imageSrc = event.image ? event.image : '/dss/images/event-default.png';

    return (
        <div className={styles.event}>
            <div className={styles.img}>
                <Image
                    src={`${PUBLIC_APP_URL}${imageSrc}`}
                    width={170}
                    height={100}
                    alt={event.name}
                    unoptimized
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>

            <div className={styles.info}>
                <span>
                    {new Date().toLocaleDateString('en-US')} at {event.time}
                </span>
                <h3>{event.name}</h3>
            </div>

            <div className={styles.link}>
                <Link className="btn" href={`/events/${event.slug}`}>
                    Details
                </Link>
            </div>
        </div>
    );
};

export default EventItem;
