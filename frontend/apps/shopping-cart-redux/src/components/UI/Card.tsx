import { FC } from 'react';
import classes from './Card.module.scss';
type CardProps = {
    children: React.ReactNode;
    className?: string;
};
const Card: FC<CardProps> = ({ children, className }) => {
    return <section className={`${classes.card} ${className ? className : ''}`}>{children}</section>;
};

export default Card;
