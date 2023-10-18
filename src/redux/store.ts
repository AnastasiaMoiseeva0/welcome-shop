import { createStore, combineReducers } from "redux";
import ordersReducer from "./ordersReducer";
import { IOrder } from "../types/IOrder";

export interface MyStore {
    orders: IOrder[]
}

export const store = createStore(
    combineReducers({
        orders: ordersReducer
    })
)

export type RootState = ReturnType<typeof store.getState>