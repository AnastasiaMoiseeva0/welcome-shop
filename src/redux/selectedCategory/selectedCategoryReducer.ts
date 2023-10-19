import { ICategory } from "../../types/ICategory";
import { SELECT_CATEGORY, SelectedCategoryActions } from "./selectedCategoryActions";

export default function selectedCategoryReducer(state: ICategory['key'] | null = null, action: SelectedCategoryActions): ICategory['key'] | null {
    switch (action.type) {
        case SELECT_CATEGORY: {
          return action.payload;
        }
        default:
          break;
      }
      return state;
}
