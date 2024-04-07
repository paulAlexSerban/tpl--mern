import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

export type CartItem = {
    id: string;
    title: string;
    quantity: number;
    price: number;
};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart(state, action: PayloadAction<CartItem>) {
            const itemIndex = state.items.findIndex((item) => item.id === action.payload.id);
            if (itemIndex >= 0) {
                state.items[itemIndex].quantity++;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
        },
        removeFromCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            const itemIndex = state.items.findIndex((item) => item.id === id);
            if (state.items[itemIndex].quantity === 1) {
                state.items.splice(itemIndex, 1);
            } else {
                state.items[itemIndex].quantity--;
            }
        },
    },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
