import { FC } from 'react';
import classes from './CartButton.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { toggle } from '../../store/ui-slice';
import { RootState } from '../../store/index';
type CartButtonProps = {
    onClick: () => void;
};

const CartButton: FC<CartButtonProps> = () => {
    const dispatch = useDispatch();
    const cartQuantity = useSelector((state: RootState) => state.cart.totalQuantity);
    const toggleCartHandler = () => {
        dispatch(toggle());
    };

    return (
        <button className={classes.button} onClick={toggleCartHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartQuantity}</span>
        </button>
    );
};

export default CartButton;
