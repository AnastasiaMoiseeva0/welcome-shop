import { ICategory } from "../../types/ICategory";

export const SELECT_CATEGORY = 'SELECT_CATEGORY';

interface SelectedCategoryAction {
    type: typeof SELECT_CATEGORY;
    payload:  ICategory['key'] | null
}

export function selectorCategoryActionCreator(category: ICategory['key'] | null) : SelectedCategoryAction {
    return {type: SELECT_CATEGORY, payload: category }
}

export type SelectedCategoryActions = SelectedCategoryAction;