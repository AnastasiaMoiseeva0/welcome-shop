import suppliesCards from "./suppliesCards.json";
import categories from "./categories.json";
import { ICategory } from "../types/ICategory";

export function getProducts() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(suppliesCards);
    }, 1000);
  });
  return promise;
}

export function getCategories(): Promise<ICategory[]> {
  const promise = new Promise<ICategory[]>((resolve) => {
    setTimeout(() => {
      resolve(categories as ICategory[]);
    }, 1000);
  });

  return promise;
}
