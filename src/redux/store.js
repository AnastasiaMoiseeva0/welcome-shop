import { createStore, combineReducers } from "redux";
import { productsReduser } from "./productsReduser";

export const store = createStore(
    combineReducers({
        products: productsReduser
    })
)