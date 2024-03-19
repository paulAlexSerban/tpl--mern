import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.scss';

const MainHeader = () => {
    return (
        <header className={classes.header}>
            <h1>ReduxCart</h1>
            <nav>
                <ul>
                    <li>
                        <CartButton onClick={() => {}} />
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default MainHeader;
