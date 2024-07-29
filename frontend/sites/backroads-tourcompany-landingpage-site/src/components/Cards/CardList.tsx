import { FC } from 'react';

import Card from './Card';
import styles from './CardList.module.scss';

import { CardList as CardListProps } from '@/@types';

const CardList: FC<CardListProps> = ({ cards }) => {
    const classes = [styles.featuredCenter, 'section-center'].join(' ');
    return (
        <div className={classes}>
            {cards.map((card) => {
                return <Card {...card} key={card.id} />;
            })}
        </div>
    );
};
export default CardList;
