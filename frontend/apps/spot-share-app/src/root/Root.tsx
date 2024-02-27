import { Outlet } from 'react-router-dom';

import MainNavigation from '../shared/Navigation/MainNavigation';

const Root = () => {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;
