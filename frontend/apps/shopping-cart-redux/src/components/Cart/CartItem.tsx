import { FC } from 'react';
import classes from './CartItem.module.scss';
import { useAppDispatch } from '../../hooks';
import { addItemToCart, removeItemFromCart } from '../../store/cart-slice';
export interface ICartItem {
    id: string;
    title: string;
    quantity: number;
    total: number;
    price: number;
}

export type CartItemProps = {
    item: ICartItem;
};

const CartItem: FC<CartItemProps> = ({ item: { id, title, quantity, total, price } }) => {
    const dispatch = useAppDispatch();
    const removeItemHandler = () => {
        dispatch(removeItemFromCart(id));
    };
    const addItemHandler = () => {
        dispatch(
            addItemToCart({
                id,
                title,
                price,
            })
        );
    };
    return (
        <li className={classes.item}>
            <header>
                <h3>{title}</h3>
                <div className={classes.price}>
                    ${total.toFixed(2)} <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
                </div>
            </header>
            <div className={classes.details}>
                <div className={classes.quantity}>
                    x <span>{quantity}</span>
                </div>
                <div className={classes.actions}>
                    <button onClick={removeItemHandler}>-</button>
                    <button onClick={addItemHandler}>+</button>
                </div>
            </div>
        </li>
    );
};

export default CartItem;
