import suppliesCards from "./suppliesCards.json";
import categories from "./categories.json";

export function getProducts() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(suppliesCards);
    }, 1000);
  });
  return promise;
}

export function getCategories() {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(categories);
    }, 1000);
  });
  return promise;
}
