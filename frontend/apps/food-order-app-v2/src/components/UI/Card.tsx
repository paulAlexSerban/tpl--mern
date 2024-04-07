import classes from './Card.module.scss';
import type { FC } from 'react';
type CardProps = {
    children: React.ReactNode;
};

const Card: FC<CardProps> = ({ children }) => {
    return <div className={classes.card}>{children}</div>;
};

export default Card;
