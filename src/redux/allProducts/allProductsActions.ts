import { ICard } from "../../types/ICard";

export const SET_ALL_PRODUCTS = 'SET_ALL_PRODUCTS';

interface AllProductsAction {
    type: typeof SET_ALL_PRODUCTS;
    payload: ICard[];
}

export function setAllProductsActionCreator(products: ICard[]) : AllProductsAction {
    return {type: SET_ALL_PRODUCTS, payload: products }
}

export type AllProductsActions = AllProductsAction;