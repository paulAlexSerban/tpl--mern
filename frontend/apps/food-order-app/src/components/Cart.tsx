import { type FC } from 'react';
import Modal from './UI/Modal';
import { useCartContext } from '../store/CartContext';
import { useUserProgressContext } from '../store/UserProgressContext';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import CartItemCmp from './CartItem';
const Cart: FC = () => {
    const { items } = useCartContext();
    const { progress, hideCart, showCheckout } = useUserProgressContext();
    const cartTotal = items.reduce((totalPrice, item) => totalPrice + item.price * item.quantity, 0);
    const handleCloseCart = () => {
        hideCart();
    };
    const handleCheckout = () => {
        showCheckout();
    };
    // - we make sure that we trigger the onClose handler only when the cart is open
    // - if not when we change the progress to checkout the cart will close and the onClose
    // handler will be triggered on the cart so the progress reset to ''
    // - this is triggered because evaluating false to the open attribute triggers the close event on the modal and it's handler
    return (
        <Modal open={progress === 'cart'} onClose={progress === 'cart' ? handleCloseCart : undefined} className="cart">
            <h2>Cart</h2>
            <ul>
                {items.map((item) => (
                    <CartItemCmp key={item.id} {...item} />
                ))}
            </ul>
            <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
            <p className="modal-actions">
                <Button onClick={handleCloseCart} textOnly>
                    Close
                </Button>
                {items.length !== 0 && <Button onClick={handleCheckout}>Go to checkout!</Button>}
            </p>
        </Modal>
    );
};

export default Cart;
