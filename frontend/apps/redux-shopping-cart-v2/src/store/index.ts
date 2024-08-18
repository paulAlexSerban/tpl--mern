import { configureStore, combineReducers } from '@reduxjs/toolkit';
import cart from '@/store/slices/cart';
import modal from '@/store/slices/modal';
/**
 * Creates and configures the Redux store.
 * The store is created with a root reducer consisting of `unitReducer` and `statusSlice`.
 * @NOTE: The configureStore function is designed to infer types automatically, so you typically don't need to manually specify types with Store
 */

const rootReducer = combineReducers({
    cart,
    modal,
});

export const setupStore = () =>
    configureStore({
        reducer: rootReducer,
    });

/**
 * Infers and exports the `RootState` type from the store's state.
 * The `RootState` type represents the complete state of the Redux store.
 */
export type RootState = ReturnType<typeof rootReducer>;

/**
 * Infers and exports the `AppDispatch` type from the store's dispatch function.
 * The `AppDispatch` type represents the dispatch function to interact with the Redux store.
 */

export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore['dispatch'];
