import { pageLinks } from '@/data';
import PageLink from './PageLink';
import { FC } from 'react';

import { PageLinks as PageLinksProps } from '@/@types';

const PageLinks: FC<PageLinksProps> = ({ parentClass, itemClass }) => {
    return (
        <ul className={parentClass} id="nav-links">
            {pageLinks.map((link) => {
                return <PageLink key={link.id} link={link} itemClass={itemClass} />;
            })}
        </ul>
    );
};
export default PageLinks;
