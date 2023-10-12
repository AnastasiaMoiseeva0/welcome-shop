import { createStore, combineReducers } from "redux";
import ordersReducer from "./ordersReducer";

export const store = createStore(
    combineReducers({
        orders: ordersReducer
    })
)