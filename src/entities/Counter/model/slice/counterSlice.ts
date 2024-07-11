import { createSlice } from '@reduxjs/toolkit';
import { CounterSchema } from '../types/counterSchema';

const initialState: CounterSchema = {
    value: 0,
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.value += 1;
        },
        decrement: (state) => {
            // eslint-disable-next-line no-param-reassign
            state.value -= 1;
        },
    },
});

// Action creators are generated for each case reducer function
export const { actions: counterActions } = counterSlice;
export const { reducer: counterReducer } = counterSlice;
