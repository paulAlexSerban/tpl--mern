// Importing the Redux toolkit configuration and the reducers.
import { configureStore, Store } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import authenticationSlice from './authenticationSlice';
/**
 * Creates and configures the Redux store.
 * The store is created with a root reducer consisting of `unitReducer` and `statusSlice`.
 * @type {Store}
 */

// Configure the store with the counter slice reducer
export const store: Store = configureStore({
    reducer: {
        counter: counterReducer,
        authentication: authenticationSlice,
    },
});

/**
 * Infers and exports the `RootState` type from the store's state.
 * The `RootState` type represents the complete state of the Redux store.
 * @type {State}
 */

export type RootState = ReturnType<typeof store.getState>;

/**
 * Infers and exports the `AppDispatch` type from the store's dispatch function.
 * The `AppDispatch` type represents the dispatch function to interact with the Redux store.
 * @type {Dispatch}
 */
export type AppDispatch = typeof store.dispatch;
