import { FC } from 'react';
import { Card as CardProps } from '@/@types';

import styles from './Card.module.scss';

const Card: FC<CardProps> = (props) => {
    const { image, date, title, info, location, duration, cost } = props;

    return (
        <article className={styles.base}>
            <div className={styles.imgContainer}>
                <img src={image} className={styles.img} alt={title} />
                <p className={styles.date}>{date}</p>
            </div>
            <div className={styles.info}>
                <div className={styles.title}>
                    <h4>{title}</h4>
                </div>
                <p>{info}</p>
                <div className={styles.footer}>
                    <p>
                        <span>
                            <i className="fas fa-map"></i>
                        </span>
                        {location}
                    </p>
                    <p>from ${cost}</p>
                    <p>{duration} days</p>
                </div>
            </div>
        </article>
    );
};
export default Card;
