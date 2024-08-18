import { CartIcon } from '@/Icons';
import { useReduxContext, cartSelector } from '@/store/hooks';

const Navbar = () => {
    const { selector } = useReduxContext();
    const { amount } = selector(cartSelector);

    return (
        <nav>
            <div className="nav-center">
                <h3>redux toolkit</h3>
                <div className="nav-container">
                    <CartIcon />
                    <div className="amount-container">
                        <p className="total-amount">{amount}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
