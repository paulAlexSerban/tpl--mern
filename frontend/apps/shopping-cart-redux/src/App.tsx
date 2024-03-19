import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
import { RootState } from './store/index';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { useDispatch } from 'react-redux';
import { showNotification } from './store/ui-slice';

// it is not reinitialized on every render
let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state: RootState) => state.ui.cartIsVisible);
    const notification = useSelector((state: RootState) => state.ui.notification);
    const cart = useSelector((state: RootState) => state.cart);

    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                showNotification({
                    status: 'pending',
                    title: 'Sending...',
                    message: 'Sending cart data!',
                })
            );
            const response = await fetch('http://localhost:3000/api/cart', {
                method: 'PUT',
                body: JSON.stringify(cart),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }

            dispatch(
                showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
        };

        if (isInitial) {
            isInitial = false;
            return;
        }

        if (showCart) {
            sendCartData().catch((error) => {
                console.log({ error });
                dispatch(
                    showNotification({
                        status: 'error',
                        title: 'Error!',
                        message: 'Sending cart data failed!',
                    })
                );
            });
        }
    }, [cart, dispatch, showCart]);

    return (
        <>
            {notification && (
                <Notification title={notification.title} message={notification.message} status={notification.status} />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
