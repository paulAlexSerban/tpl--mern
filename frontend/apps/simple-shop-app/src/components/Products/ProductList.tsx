import { FC } from 'react';

import ProductItem, { ProductItemProps } from './ProductItem';
import './ProductList.css';

type ProductListProps = {
    items: ProductItemProps[];
};

const ProductList: FC<ProductListProps> = ({ items }) => {
    let content;
    if (!items || items.length === 0) {
        content = <p>Could not find any products. Maybe create one?</p>;
    } else {
        content = (
            <ul className="product-list">
                {items.map((p) => (
                    <ProductItem key={p.id} name={p.name} price={p.price} />
                ))}
            </ul>
        );
    }

    return <section id="products">{content}</section>;
};

export default ProductList;
