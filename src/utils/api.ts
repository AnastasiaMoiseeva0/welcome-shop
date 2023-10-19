import suppliesCards from "./suppliesCards.json";
import categories from "./categories.json";
import { ICategory } from "../types/ICategory";
import { ICard } from "../types/ICard";

export function getProducts(): Promise<ICard[]>  {
  const promise = new Promise<ICard[]>((resolve) => {
    setTimeout(() => {
      resolve(suppliesCards as ICard[]);
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
