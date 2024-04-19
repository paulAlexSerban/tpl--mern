import { FC, ReactNode } from 'react';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

type BaseLayoutProps = {
    children: ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <Footer />
        </>
    );
};

export default BaseLayout;
