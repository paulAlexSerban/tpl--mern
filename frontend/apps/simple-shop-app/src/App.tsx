import { useState, useEffect } from 'react';
import { ProductItemProps } from './components/Products/ProductItem';
import Header from './components/Header/Header';
import NewProduct, { NewProductProps } from './components/Products/NewProduct';
import ProductList from './components/Products/ProductList';
import './App.css';

function App() {
    const [loadedProducts, setLoadedProducts] = useState<ProductItemProps[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                setIsLoading(true);
                const response = await fetch('http://localhost:3000/api/v1/product');
                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message);
                }

                setLoadedProducts(responseData.products);
                setIsLoading(false);
            } catch (error) {
                if (error instanceof Error) {
                    console.error(error.message || 'Something went wrong!');
                }
            }
        };

        fetchProducts();
    }, []);

    const addProductHandler: NewProductProps['onAddProduct'] = async (productName, productPrice) => {
        try {
            const newProduct = {
                name: productName,
                price: +productPrice, // "+" to convert string to number
            };
            let hasError = false;
            const response = await fetch('http://localhost:3000/api/v1/product', {
                method: 'POST',
                body: JSON.stringify(newProduct),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                hasError = true;
            }

            const responseData = await response.json();

            if (hasError) {
                throw new Error(responseData.message);
            }

            setLoadedProducts((prevProducts) => {
                return prevProducts.concat({
                    ...newProduct,
                    id: responseData.product.id,
                });
            });
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message || 'Something went wrong!');
            }
        }
    };

    return (
        <>
            <Header />
            <main>
                <NewProduct onAddProduct={addProductHandler} />
                {isLoading && <p className="loader">Loading...</p>}
                {!isLoading && <ProductList items={loadedProducts} />}
            </main>
        </>
    );
}

export default App;
