import { ICard } from "../../types/ICard";
import {
  SET_ALL_PRODUCTS,
  AllProductsActions,
} from "./allProductsActions";

export default function allProductsReducer(
  state: ICard[] = [],
  action: AllProductsActions
): ICard[] {
  switch (action.type) {
    case SET_ALL_PRODUCTS: {
      return action.payload;
    }
    default:
      break;
  }
  return state;
}
