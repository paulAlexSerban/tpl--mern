import { FC } from 'react';

import './ProductItem.css';

export type ProductItemProps = {
    id?: string;
    name: string;
    price: number;
};

const ProductItem: FC<ProductItemProps> = ({ name, price }) => {
    return (
        <li className="product-item">
            <h2>{name}</h2>
            <p>Price: ${price}</p>
        </li>
    );
};

export default ProductItem;
