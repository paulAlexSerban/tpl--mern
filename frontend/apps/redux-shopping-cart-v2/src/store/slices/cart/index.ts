import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CartState } from '@/types.d';
import { CART_ACTIONS, SLICE_NAME } from '@/store/slices/cart/cart.config';
import * as cartReducer from '@/store/slices/cart/cart.reducer.function';
import { getCartItems } from '@/store/slices/cart/cart.thunks';
import dummyData from '@/dummy-products';
import { CartItem } from '@/types.d';

const initialState: CartState = {
    cartItems: [],
    amount: dummyData.length,
    total: 0,
    isLoading: true,
};

const cartSlice = createSlice({
    name: SLICE_NAME,
    initialState,
    reducers: {
        [CART_ACTIONS.ADD_TO_CART]: cartReducer.addToCart,
        [CART_ACTIONS.REMOVE_FROM_CART]: cartReducer.removeFromCart,
        [CART_ACTIONS.INCREASE]: cartReducer.increase,
        [CART_ACTIONS.DECREASE]: cartReducer.decrease,
        [CART_ACTIONS.CLEAR_CART]: cartReducer.clearCart,
        [CART_ACTIONS.CALCULATE_TOTALS]: cartReducer.calculateTotals,
    },
    extraReducers: (builder) => {
        builder.addCase(getCartItems.fulfilled, (state: CartState, action: PayloadAction<CartItem[]>) => {
            state.cartItems = action.payload;
            state.isLoading = false;
        });

        builder.addCase(getCartItems.pending, (state: CartState) => {
            state.isLoading = true;
        });

        builder.addCase(getCartItems.rejected, (state: CartState) => {
            state.isLoading = false;
        });
    },
});

export { getCartItems };
export const { addToCart, removeFromCart, increase, decrease, clearCart, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;
