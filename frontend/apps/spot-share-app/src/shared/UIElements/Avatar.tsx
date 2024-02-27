import { FC } from 'react';

import './Avatar.scss';

type AvatarProps = {
    image: string;
    alt: string;
    width: string;
    className: string;
    style: any;
};

const Avatar: FC<AvatarProps> = ({ image, alt, width, className, style }) => {
    return (
        <div className={`avatar ${className}`} style={style}>
            <img src={image} alt={alt} style={{ width: width, height: width }} />
        </div>
    );
};

export default Avatar;
