import { FC } from 'react';

type SocialLinkProps = {
    itemClass: string;
    href: string;
    icon: string;
    target: string;
    rel: string;
};

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
