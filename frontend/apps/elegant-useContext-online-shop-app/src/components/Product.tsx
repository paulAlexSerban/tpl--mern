import { type FC } from 'react';
import { useCartContext } from '../store/shopping-cart-context';

type ProductProps = {
    id: string;
    image: string;
    title: string;
    price: number;
    description: string;
};

const Product: FC<ProductProps> = ({ id, image, title, price, description }: ProductProps) => {
    const { addItem } = useCartContext();
    return (
        <article className="product">
            <img src={image} alt={title} />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">${price}</p>
                    <p>{description}</p>
                </div>
                <p className="product-actions">
                    <button onClick={() => addItem(id)}>Add to Cart</button>
                </p>
            </div>
        </article>
    );
};

export default Product;
