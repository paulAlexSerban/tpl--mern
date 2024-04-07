import { configureStore } from '@reduxjs/toolkit';
import { cartSlice } from './cart-slice';

export const store = configureStore({
    reducer: {
        cart: cartSlice.reducer,
    },
});

// const name = 'Paul';
// type N = typeof name;
export type AppDispatch = typeof store.dispatch;
// use ReturnType to get the type of the return of the function
export type RootState = ReturnType<typeof store.getState>;
