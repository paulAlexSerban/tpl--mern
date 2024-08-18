import CartItem from './CartItem';
import { useReduxContext, cartSelector } from '@/store/hooks';
import { openModal } from '@/store/slices/modal';
import { CartItem as CartItemType } from '@/types';

const CartContainer = () => {
    const { selector, dispatch } = useReduxContext();
    const { cartItems, total, amount } = selector(cartSelector);

    const handleOpenModal = () => {
        dispatch(openModal());
    };

    if (amount < 1) {
        return (
            <section className="cart">
                <header>
                    <h2>your bag</h2>
                    <h4 className="empty-cart">is currently empty</h4>
                </header>
            </section>
        );
    }

    return (
        <section className="cart">
            <header>
                <h2>your bag</h2>
            </header>
            <div>
                {cartItems.map((item: CartItemType) => {
                    return <CartItem key={item.id} {...item} />;
                })}
            </div>
            <footer>
                <hr />
                <div className="cart-total">
                    <h4>
                        total <span>${total.toFixed(2)}</span>
                    </h4>
                </div>
                <button className="btn clear-btn" onClick={handleOpenModal}>
                    clear cart
                </button>
            </footer>
        </section>
    );
};
export default CartContainer;
