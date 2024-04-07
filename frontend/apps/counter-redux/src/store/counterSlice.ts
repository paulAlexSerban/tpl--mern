import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type CounterState = { counter: number; showCounter: boolean };
const initialState: CounterState = { counter: 0, showCounter: true };

/**
 * createSlice prepares a slice of the Global Redux State
 * It takes an object with the following properties:
 * - name: The name of the slice
 * - initialState: The initial state of the slice
 * - reducers: An object with the action creators and their corresponding reducer functions
 */
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        // @IMPORTANT: - DO NOT MUTATE THE STATE
        // Redux Toolkit allows us to write "mutating" logic in reducers.
        // It doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        increment: (state) => {
            state.counter += 1;
        },
        decrement: (state) => {
            state.counter -= 1;
        },
        increase: (state, action: PayloadAction<number>) => {
            state.counter += action.payload;
        },
        decrease: (state, action: PayloadAction<number>) => {
            state.counter -= action.payload;
        },
        toggle: (state) => {
            state.showCounter = !state.showCounter;
        },
    },
});

export const { increment, decrement, increase, decrease, toggle } = counterSlice.actions;

export default counterSlice.reducer;
