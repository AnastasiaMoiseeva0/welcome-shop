import { configureStore } from '@reduxjs/toolkit';
import ordersSlice from "./orders/ordersSlice";
import selectedCategorySlice from "./selectedCategory/selectedCategorySlice";
import allCategoriesSlice from "./allCategories/allCategoriesSlice";
import allProductsSlice from "./allProducts/allProductsSlice";
import setSearchSlice from "./search/searchSlice";
import setMenuOpenSlice from "./menuOpen/setMenuOpenSlice";

export const store = configureStore({
    reducer: {
        orders: ordersSlice,
        selectedCategory: selectedCategorySlice,
        allCategories: allCategoriesSlice,
        allProducts: allProductsSlice,
        search: setSearchSlice,
        isMenuOpen: setMenuOpenSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>