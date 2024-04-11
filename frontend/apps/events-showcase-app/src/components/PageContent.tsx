import classes from './PageContent.module.scss';
import { type ReactNode, FC } from 'react';
type PageContentProps = {
    title: string;
    children: ReactNode;
};

const PageContent: FC<PageContentProps> = ({ title, children }) => {
    return (
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    );
};

export default PageContent;
