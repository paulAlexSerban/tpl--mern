import { configureStore, Store } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import cartReducer from './cart-slice';

export const store: Store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
