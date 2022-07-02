import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    elements: [],
};

export const CounterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        addCounter(state, action) {
            state.elements.push({
                number: state.elements.length + 1,
                value: state.elements.reduce((prev, curr) => prev + curr.value, 0),
                isShowButtons: (state.elements.length + 1) % 4,
            });
        },
        removeCounter(state, action) {
            delete state.elements.pop();
        },
        decrementValue(state, action) {
            state.elements[action.payload-1].value -= 1; 
        },
        incrementValue(state, action) {
            state.elements[action.payload-1].value += 1; 
        },
    },
});

export const counterReducer = CounterSlice.reducer;
export const { addCounter, removeCounter, incrementValue, decrementValue} = CounterSlice.actions;