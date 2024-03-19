import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { RootState } from './store/index';
import { useEffect } from 'react';
import Notification from './components/UI/Notification';
import { useAppDispatch, useAppSelector } from './hooks';
import { sendCartData, fetchCartData } from './store/cart-actions';
import { hideNotification } from './store/ui-slice';

// it is not reinitialized on every render
let isInitial = true;

function App() {
    const dispatch = useAppDispatch();
    const showCart = useAppSelector((state: RootState) => state.ui.cartIsVisible);
    const notification = useAppSelector((state: RootState) => state.ui.notification);
    const cart = useAppSelector((state: RootState) => state.cart);

    useEffect(() => {
        if (!isInitial) {
            isInitial = false;
            return;
        }

        if (cart.changed) {
            dispatch(sendCartData(cart));
        }
    }, [cart, dispatch]);

    useEffect(() => {
        dispatch(fetchCartData());
    }, [dispatch]);

    useEffect(() => {
        if (notification) {
            const timer = setTimeout(() => {
                dispatch(hideNotification());
            }, 3000);

            return () => {
                clearTimeout(timer);
            };
        }
    }, [notification, dispatch]);

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
