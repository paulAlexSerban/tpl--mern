import { type CounterState } from './counter';
import { type PayloadAction } from '@reduxjs/toolkit';

export const increment = (state: CounterState): void => {
    state.counter++;
};

export const decrement = (state: CounterState): void => {
    state.counter--;
};

export const increase = (state: CounterState, action: PayloadAction<number>): void => {
    state.counter += action.payload;
};

export const decrease = (state: CounterState, action: PayloadAction<number>): void => {
    state.counter -= action.payload;
};

export const toggle = (state: CounterState): void => {
    state.showCounter = !state.showCounter;
};
