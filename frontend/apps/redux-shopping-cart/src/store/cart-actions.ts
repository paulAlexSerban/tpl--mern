import { showNotification } from './ui-slice';
import { type AppDispatch } from './index';
import { type CartState, replaceCart } from './cart-slice';

export const fetchCartData = () => {
    return async (dispatch: AppDispatch) => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:3000/api/cart');

            if (!response.ok) {
                throw new Error('Could not fetch cart data!');
            }

            const data = await response.json();
            return data;
        };

        try {
            const cartData = await fetchData();
            console.log('Dispatching replaceCart with data:', cartData);
            dispatch(
                replaceCart({
                    items: cartData.items || [],
                    totalQuantity: parseInt(cartData.totalQuantity),
                })
            );
            console.log('Dispatched replaceCart successfully');
        } catch (error) {
            console.error('Error in fetchCartData:', error);
            dispatch(
                showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Fetching cart data failed!',
                })
            );
        }
    };
};

export const sendCartData = (cart: CartState) => {
    return async (dispatch: AppDispatch) => {
        dispatch(
            showNotification({
                status: 'pending',
                title: 'Sending...',
                message: 'Sending cart data!',
            })
        );

        const sendRequest = async () => {
            const response = await fetch('http://localhost:3000/api/cart', {
                method: 'PUT',
                body: JSON.stringify({
                    items: cart.items,
                    totalQuantity: cart.totalQuantity,
                }),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                throw new Error('Sending cart data failed.');
            }
        };
        try {
            await sendRequest();
            dispatch(
                showNotification({
                    status: 'success',
                    title: 'Success!',
                    message: 'Sent cart data successfully!',
                })
            );
        } catch (error) {
            console.log({ error });
            dispatch(
                showNotification({
                    status: 'error',
                    title: 'Error!',
                    message: 'Sending cart data failed!',
                })
            );
        }
    };
};
