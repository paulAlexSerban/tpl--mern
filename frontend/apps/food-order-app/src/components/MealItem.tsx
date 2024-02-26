import { type FC } from 'react';
import { currencyFormatter } from '../util/formatting';
import Button from './UI/Button';
import { useCartContext } from '../store/CartContext';
type MealItemProps = {
    name: string;
    description: string;
    price: string;
    image: string;
};

const MealItem: FC<MealItemProps> = ({ image, name, price, description }) => {
    const formattedPrice = currencyFormatter.format(Number(price));
    const { addItem } = useCartContext();
    const handleAddMealToCart = () => {
        addItem({
            id: name,
            name,
            price: Number(price),
            quantity: 1,
        });
    };
    return (
        <li className="meal-item">
            <article>
                <img src={`http://localhost:4001/${image}`} alt={name} />
                <div>
                    <h3>{name}</h3>
                    <p className="meal-item-price">{formattedPrice}</p>
                    <p className="meal-item-description">{description}</p>
                </div>
                <div className="meal-item-actions">
                    <Button onClick={handleAddMealToCart}>Add to cart</Button>
                </div>
            </article>
        </li>
    );
};

export default MealItem;
