import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ICartItem } from '../components/Cart/CartItem';
import { ProductItemProps } from '../components/Shop/ProductItem';

export interface CartState {
    items: ICartItem[];
    totalQuantity: number;
    changed: boolean;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
    changed: false,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        replaceCart(state, action: PayloadAction<{ items: ICartItem[]; totalQuantity: number }>) {
            state.items = action.payload.items;
            state.totalQuantity = action.payload.totalQuantity;
        },
        addItemToCart(state, action: PayloadAction<ProductItemProps>) {
            const newItem = action.payload;
            const existingItem = state.items.find((item) => item.id === newItem.id);
            state.totalQuantity++;
            state.changed = true;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    quantity: 1,
                    total: newItem.price,
                    price: newItem.price,
                });
            } else {
                existingItem.quantity++;
                existingItem.total = existingItem.total + newItem.price;
            }
        },
        removeItemFromCart(state, action: PayloadAction<string>) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);
            if (!existingItem) {
                return;
            }
            state.totalQuantity--;
            state.changed = true;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity--;
                existingItem.total = existingItem.total - existingItem.price;
            }
        },
    },
});

export const { replaceCart, addItemToCart, removeItemFromCart } = cartSlice.actions;

export default cartSlice.reducer;
