import { CartState } from '@/types';
import { PayloadAction } from '@reduxjs/toolkit';
import { CartItem } from '@/types';

const addToCart = (state: CartState, action: PayloadAction<CartItem>) => {
    state.cartItems.push(action.payload);
    state.amount += 1;
};

const removeFromCart = (state: CartState, action: PayloadAction<{ id: string }>) => {
    state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
    state.amount -= 1;
};

const increase = (state: CartState, action: PayloadAction<{ id: string }>) => {
    const item = state.cartItems.find((item) => item.id === action.payload.id);
    if (item) {
        item.amount += 1;
        state.amount += 1;
    }
};

const decrease = (state: CartState, action: PayloadAction<{ id: string }>) => {
    const item = state.cartItems.find((item) => item.id === action.payload.id);
    if (item) {
        if (item.amount === 1) {
            state.cartItems = state.cartItems.filter((item) => item.id !== action.payload.id);
            state.amount -= 1;
            return;
        }
        item.amount -= 1;
        state.amount -= 1;
    }
};

const clearCart = (state: CartState) => {
    state.cartItems = [];
    state.amount = 0;
};

const calculateTotals = (state: CartState) => {
    let { total, amount } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
            const { price, amount } = cartItem;
            const itemTotal = price * amount;

            cartTotal.total += itemTotal;
            cartTotal.amount += amount;
            return cartTotal;
        },
        {
            total: 0,
            amount: 0,
        }
    );

    total = parseFloat(total.toFixed(2));

    state.total = total;
    state.amount = amount;
};

export { addToCart, removeFromCart, increase, decrease, clearCart, calculateTotals };
