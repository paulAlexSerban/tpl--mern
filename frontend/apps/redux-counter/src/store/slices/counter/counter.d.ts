import { type PayloadAction, type CaseReducer } from '@reduxjs/toolkit';
import { COUNTER_ACTIONS } from './counter.actions';

export type CounterState = {
    counter: number;
    showCounter: boolean;
};

export type CounterReducers = {
    [COUNTER_ACTIONS.INCREMENT]: CaseReducer<CounterState>;
    [COUNTER_ACTIONS.DECREMENT]: CaseReducer<CounterState>;
    [COUNTER_ACTIONS.INCREASE]: CaseReducer<CounterState, PayloadAction<number>>;
    [COUNTER_ACTIONS.DECREASE]: CaseReducer<CounterState, PayloadAction<number>>;
    [COUNTER_ACTIONS.TOGGLE]: CaseReducer<CounterState>;
};
