import { FC, useState } from 'react';
import './MainNavigation.scss';
import MainHeader from './MainHeader';
import NavLinks from './NavLinks';
import SideDrawer from './SideDrawer';
import Backdrop from '../UIElements/Backdrop';
import { Link } from 'react-router-dom';

type MainNavigationProps = {};

const MainNavigation: FC<MainNavigationProps> = ({}) => {
    const [drawerIsOpen, setDrawerIsOpen] = useState(false);

    const handleOpenDrawer = () => {
        setDrawerIsOpen(true);
    };

    const handleCloseDrawer = () => {
        setDrawerIsOpen(false);
    };

    return (
        <>
            {drawerIsOpen && <Backdrop onClick={handleCloseDrawer} />}
            <SideDrawer show={drawerIsOpen} onClick={handleCloseDrawer}>
                <nav className="main-navigation__drawer">
                    <NavLinks />
                </nav>
            </SideDrawer>
            <MainHeader>
                <button className="main-navigation__menu-btn" onClick={handleOpenDrawer}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>
                <h1 className="main-navigation__title">
                    <Link to="/">SpotShare</Link>
                </h1>
                <nav className="main-navigation__header-nav">
                    <NavLinks />
                </nav>
            </MainHeader>
        </>
    );
};

export default MainNavigation;
