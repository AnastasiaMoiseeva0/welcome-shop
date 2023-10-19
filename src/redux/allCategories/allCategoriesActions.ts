import { ICategory } from "../../types/ICategory";

export const SET_ALL_CATEGORIES = 'ALL_CATEGORIES';

interface AllCategoriesAction {
    type: typeof SET_ALL_CATEGORIES;
    payload: ICategory[]
}

export function allCategoriesActionCreator(categories: ICategory[]) : AllCategoriesAction {
    return {type: SET_ALL_CATEGORIES, payload: categories }
}

export type AllCategoriesActions = AllCategoriesAction;