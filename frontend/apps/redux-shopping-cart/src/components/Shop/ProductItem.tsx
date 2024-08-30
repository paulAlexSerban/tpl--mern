import { FC } from 'react';

import Card from '../UI/Card';
import classes from './ProductItem.module.scss';
import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart-slice';

export type ProductItemProps = {
    id: string;
    title: string;
    price: number;
    description?: string;
};

const ProductItem: FC<ProductItemProps> = ({ id, title, price, description }) => {
    const dispatch = useDispatch();
    const addToCartHandler = () => {
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
            <Card>
                <header>
                    <h3>{title}</h3>
                    <div className={classes.price}>${price.toFixed(2)}</div>
                </header>
                <p>{description}</p>
                <div className={classes.actions}>
                    <button onClick={addToCartHandler}>Add to Cart</button>
                </div>
            </Card>
        </li>
    );
};

export default ProductItem;
