import { Outlet } from 'react-router-dom';

import MainHeader from '../components/Navigation/MainHeader.tsx';

const Root = () => {
    return (
        <>
            <MainHeader />
            <Outlet />
        </>
    );
};

export default Root;
