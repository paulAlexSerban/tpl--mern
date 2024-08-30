import { isAuthenticatedSelector } from '@/store';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { logout } from '@/store/slices/authentication';

import classes from '@/components/Header.module.scss';

const Header = () => {
    const { isAuthenticated } = useAppSelector(isAuthenticatedSelector);
    const dispatch = useAppDispatch();

    const logoutHandler = () => {
        dispatch(logout());
    };
    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            {isAuthenticated && (
                <nav>
                    <ul>
                        <li>
                            <a href="/">My Products</a>
                        </li>
                        <li>
                            <a href="/">My Sales</a>
                        </li>
                        <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Header;
