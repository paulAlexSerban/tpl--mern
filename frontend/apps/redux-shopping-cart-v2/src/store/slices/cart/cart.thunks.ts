import { createAsyncThunk } from '@reduxjs/toolkit';
import { CartItem } from '@/types.d';
import { SLICE_NAME, CART_ACTIONS } from './cart.config';

export const getCartItems = createAsyncThunk<CartItem[], void>(
    `${SLICE_NAME}/${CART_ACTIONS.GET_CART_ITEMS}`,
    async () => {
        try {
            const url = 'https://www.course-api.com/react-useReducer-cart-project';
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Failed to fetch cart items');
            }
            const cartItems: CartItem[] = await response.json();
            return cartItems;
        } catch (error) {
            throw new Error('Failed to fetch cart items');
        }
    }
);
