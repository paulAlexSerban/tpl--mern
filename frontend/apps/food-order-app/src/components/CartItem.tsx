import { FC } from 'react';
import type { CartItem } from '../types';
import { currencyFormatter } from '../util/formatting';
import { useCartContext } from '../store/CartContext';
const CartItemCmp: FC<CartItem> = ({ name, quantity, price, id }) => {
    const { addItem, removeItem } = useCartContext();

    const handleRemoveItem = () => {
        removeItem(id);
    };

    const handleAddItem = () => {
        addItem({
            id,
            name,
            price,
            quantity: 1,
        });
    };

    return (
        <li className="cart-item">
            <p>
                {name} - {quantity} x {currencyFormatter.format(price)}
            </p>
            <p className="cart-item-actions">
                <button onClick={handleRemoveItem}>-</button>
                <span>{quantity}</span>
                <button onClick={handleAddItem}>+</button>
            </p>
        </li>
    );
};

export default CartItemCmp;
