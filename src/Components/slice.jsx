import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name : "counterReducer" , 
    initialState : {
        value : 0
    },
    reducers : {
        increment : (state) => {
            state.value += 1;
        },
        decrement : (state) => {
            state.value -= 1;
        },
        reset : (state) => {
            state.value = 0;
        }
    }
})

//export const { increment,  decrement , reset } = counterSlice.actions
export const increment = counterSlice.actions.increment
export const decrement = counterSlice.actions.decrement
export const reset = counterSlice.actions.reset

export default counterSlice.reducer;