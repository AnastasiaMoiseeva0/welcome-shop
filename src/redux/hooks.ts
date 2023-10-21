import { Dispatch } from "redux";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { OrdersActions } from "./orders/ordersActions";
import { RootState } from "./store";
import { AllCategoriesActions } from "./allCategories/allCategoriesActions";
import { SelectedCategoryActions } from "./selectedCategory/selectedCategoryActions";
import { AllProductsActions } from "./allProducts/allProductsActions";
import { SetSearchActions } from "./search/searchActions";

export const useOrdersDispatch = useDispatch<Dispatch<OrdersActions>>
export const useAllCategoriesDispatch = useDispatch<Dispatch<AllCategoriesActions>>
export const useSelectedCategoryDispatch = useDispatch<Dispatch<SelectedCategoryActions>>
export const useProductsDispatch = useDispatch<Dispatch<AllProductsActions>>
export const useSearchDispatch = useDispatch<Dispatch<SetSearchActions>>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;