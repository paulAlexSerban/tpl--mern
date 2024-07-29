import { FC, ReactNode } from 'react';

import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

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
