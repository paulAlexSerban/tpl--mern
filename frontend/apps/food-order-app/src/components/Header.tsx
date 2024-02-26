import { type FC } from 'react';
import logoImg from '../assets/logo.jpg';
import Button from './UI/Button';
import { useCartContext } from '../store/CartContext';
import { useUserProgressContext } from '../store/UserProgressContext';
const Header: FC = () => {
    const { items } = useCartContext();
    const { showCart } = useUserProgressContext();
    const cartQuantity = items.reduce((acc, item) => acc + item.quantity, 0);

    const handleShowCart = () => {
        showCart();
    };
    return (
        <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant logo." />
                <h1>Food ordering App</h1>
            </div>
            <nav>
                <Button textOnly onClick={handleShowCart}>
                    Cart ({cartQuantity})
                </Button>
            </nav>
        </header>
    );
};

export default Header;
