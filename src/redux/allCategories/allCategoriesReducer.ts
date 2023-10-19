import { ICategory } from "../../types/ICategory";
import {
  SET_ALL_CATEGORIES,
  AllCategoriesActions,
} from "./allCategoriesActions";

export default function allCategoriesReducer(
  state: ICategory[] = [],
  action: AllCategoriesActions
): ICategory[] {
  switch (action.type) {
    case SET_ALL_CATEGORIES: {
      return action.payload;
    }
    default:
      break;
  }
  return state;
}
