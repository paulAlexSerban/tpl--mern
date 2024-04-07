import classes from './Header.module.scss';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/index';
import { logout } from '../store/authenticationSlice';

const Header = () => {
    const { isAuthenticated } = useSelector((state: RootState) => state.authentication);
    const dispatch = useDispatch();
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
