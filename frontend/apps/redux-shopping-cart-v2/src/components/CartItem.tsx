import { ChevronDown, ChevronUp } from '@/Icons';
import { removeFromCart, increase, decrease } from '@/store/slices/cart';
import { useReduxContext } from '@/store/hooks';
import { FC } from 'react';
import { CartItem as CartItemProps } from '@/types.d';

const CartItem: FC<CartItemProps> = ({ id, img, title, price, amount }) => {
    const { dispatch } = useReduxContext();

    const handleRemoveItem = () => {
        dispatch(removeFromCart({ id }));
    };

    const handleIncreaseAmount = () => {
        dispatch(increase({ id }));
    };

    const handleDecreaseAmount = () => {
        if (amount === 1) {
            dispatch(removeFromCart({ id }));
            return;
        }
        dispatch(decrease({ id }));
    };

    return (
        <article className="cart-item">
            <img src={img} alt={title} />
            <div>
                <h4>{title}</h4>
                <h4 className="item-price">${price}</h4>
                <button className="remove-btn" onClick={handleRemoveItem}>
                    remove
                </button>
            </div>
            <div>
                <button className="amount-btn" onClick={handleIncreaseAmount}>
                    <ChevronUp />
                </button>
                <p className="amount">{amount}</p>
                <button className="amount-btn" onClick={handleDecreaseAmount}>
                    <ChevronDown />
                </button>
            </div>
        </article>
    );
};
export default CartItem;
