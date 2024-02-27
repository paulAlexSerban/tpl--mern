import { FC } from 'react';

import './Card.scss';

export type CardProps = {
    className?: string;
    style?: any;
    children: any;
};

const Card: FC<CardProps> = ({ className, style, children }) => {
    return (
        <div className={`card ${className}`} style={style}>
            {children}
        </div>
    );
};

export default Card;
