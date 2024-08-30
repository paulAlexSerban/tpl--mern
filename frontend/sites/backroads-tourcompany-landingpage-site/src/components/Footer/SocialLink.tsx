import { FC } from 'react';
import { SocialLink as SocialLinkProps } from '@/@types';

const SocialLink: FC<SocialLinkProps> = ({ itemClass, icon, ...props }) => {
    return (
        <li>
            <a className={itemClass} {...props}>
                <i className={icon}></i>
            </a>
        </li>
    );
};
export default SocialLink;
