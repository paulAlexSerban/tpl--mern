import ProductItem from './ProductItem';
import classes from './Products.module.scss';

const DUMMY_PRODUCTS = [
    { id: 'p1', price: 6, title: 'My First Book', description: 'The first book I ever wrote' },
    { id: 'p2', price: 5, title: 'My Second Book', description: 'The second book I ever wrote' },
    { id: 'p3', price: 7, title: 'My Third Book', description: 'The third book I ever wrote' },
    { id: 'p4', price: 8, title: 'My Fourth Book', description: 'The fourth book I ever wrote' },
    { id: 'p5', price: 9, title: 'My Fifth Book', description: 'The fifth book I ever wrote' },
    { id: 'p6', price: 10, title: 'My Sixth Book', description: 'The sixth book I ever wrote' },
];

const Products = () => {
    return (
        <section className={classes.products}>
            <h2>Buy your favorite products</h2>
            <ul>
                {DUMMY_PRODUCTS.map((product) => (
                    <ProductItem
                        key={product.id}
                        id={product.id}
                        title={product.title}
                        price={product.price}
                        description={product.description}
                    />
                ))}
            </ul>
        </section>
    );
};

export default Products;
