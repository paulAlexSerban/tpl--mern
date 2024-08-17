import { configureStore, Store } from '@reduxjs/toolkit';
import counter from './slices/counter';
import authentication from './slices/authentication';

/**
 * Creates and configures the Redux store.
 * The store is created with a root reducer consisting of `unitReducer` and `statusSlice`.
 * @NOTE: The configureStore function is designed to infer types automatically, so you typically don't need to manually specify types with Store
 */
export const store: Store = configureStore({
    reducer: {
        counter,
        authentication,
    },
});

/**
 * Infers and exports the `RootState` type from the store's state.
 * The `RootState` type represents the complete state of the Redux store.
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * Infers and exports the `AppDispatch` type from the store's dispatch function.
 * The `AppDispatch` type represents the dispatch function to interact with the Redux store.
 */
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store;

export const isAuthenticatedSelector = (state: RootState) => state.authentication;
export const counterSelector = (state: RootState) => state.counter;
