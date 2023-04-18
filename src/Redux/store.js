import { configureStore } from '@reduxjs/toolkit'
import CounterReducer from "src/Redux/Slices/counter/counterSlice.js";
import DashboardReducer from "src/Redux/Slices/dashboard/dashboardSlice.js";

export const store = configureStore({
    reducer: {
        counter: CounterReducer,
        dashboard: DashboardReducer
    }
})