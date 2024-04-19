import { FC } from 'react';

type LinkProps = {
    id: number;
    text: string;
    href: string;
};

type PageLinkProps = {
    link: LinkProps;
    itemClass: string;
};

const PageLink: FC<PageLinkProps> = ({ link, itemClass }) => {
    return (
        <li key={link.id}>
            <a href={link.href} className={itemClass}>
                {link.text}
            </a>
        </li>
    );
};
export default PageLink;
