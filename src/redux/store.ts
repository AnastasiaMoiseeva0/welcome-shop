import { createStore, combineReducers } from "redux";
import ordersReducer from "./orders/ordersReducer";
import selectedCategoryReducer from "./selectedCategory/selectedCategoryReducer";
import allCategoriesReducer from "./allCategories/allCategoriesReducer";
import allProductsReducer from "./allProducts/allProductsReducer";
import setSearchReducer from "./search/searchReducer";
import setMenuOpenReducer from "./menuOpen/setMenuOpenReducer";

export const store = createStore(
    combineReducers({
        orders: ordersReducer,
        selectedCategory: selectedCategoryReducer,
        allCategories: allCategoriesReducer,
        allProducts: allProductsReducer,
        search: setSearchReducer,
        isMenuOpen: setMenuOpenReducer,
    })
)

export type RootState = ReturnType<typeof store.getState>