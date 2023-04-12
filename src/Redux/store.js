import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "src/Redux/Slices/counter/counterSlice.js";

export const store = configureStore({
    reducer: {
        counter: CounterReducer
    }
})