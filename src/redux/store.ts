import { createStore, combineReducers } from "redux";
import ordersReducer from "./orders/ordersReducer";
import selectedCategoryReducer from "./selectedCategory/selectedCategoryReducer";
import allCategoriesReducer from "./allCategories/allCategoriesReducer";

export const store = createStore(
    combineReducers({
        orders: ordersReducer,
        selectedCategory: selectedCategoryReducer,
        allCategories: allCategoriesReducer,
    })
)

export type RootState = ReturnType<typeof store.getState>