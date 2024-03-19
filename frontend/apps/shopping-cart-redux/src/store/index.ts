import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './ui-slice';
import cartReducer from './cart-slice';

export const store = configureStore({
    reducer: {
        ui: uiReducer,
        cart: cartReducer,
    },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;
