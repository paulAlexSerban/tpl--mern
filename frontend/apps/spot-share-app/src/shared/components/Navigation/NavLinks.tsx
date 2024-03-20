import { FC, useContext } from 'react';

import { NavLink } from 'react-router-dom';

import { AuthContext } from '../../context/auth-context';
import './NavLinks.scss';

type NavLinksProps = {};

const NavLinks: FC<NavLinksProps> = ({}) => {
    const auth = useContext(AuthContext);
    const { isLoggedIn, logout } = auth;

    return (
        <ul className="nav-links">
            <li>
                <NavLink to="/">ALL USERS</NavLink>
            </li>
            {isLoggedIn && (
                <>
                    <li>
                        <NavLink to="/u1/places">MY PLACES</NavLink>
                    </li>
                    <li>
                        <NavLink to="/places/new">ADD PLACE</NavLink>
                    </li>
                </>
            )}

            {!isLoggedIn && (
                <li>
                    <NavLink to="/auth">AUTHENTICATE</NavLink>
                </li>
            )}

            {isLoggedIn && (
                <li>
                    <button onClick={logout}>LOGOUT</button>
                </li>
            )}
        </ul>
    );
};

export default NavLinks;
