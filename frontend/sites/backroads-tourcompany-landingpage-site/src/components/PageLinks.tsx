import { pageLinks } from '../data';
import PageLink from './PageLink';
import { FC } from 'react';
type PageLinksProps = {
    parentClass: string;
    itemClass: string;
};
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
