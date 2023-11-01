import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MyCartList from "../MyCartList/MyCartList";
import ProductsPage from "../ProductsPage/ProductsPage";
import { getProducts, getCategories } from "../../utils/api";
import { useAllCategoriesDispatch, useProductsDispatch } from "../../redux/hooks";
import { setAllCategoriesActionCreator } from "../../redux/allCategories/allCategoriesActions";
import { setAllProductsActionCreator } from "../../redux/allProducts/allProductsActions";

function App() {
  const allCategoriesDispatch = useAllCategoriesDispatch();
  const allProductsDispatch = useProductsDispatch();


  Promise.all([getProducts(), getCategories()])
    .then(([products, categories]) => {
      allProductsDispatch(setAllProductsActionCreator(products))
      allCategoriesDispatch(setAllCategoriesActionCreator(categories))
    })
    .catch((error) => {
      console.log(error);
    });
  return (
      <>
        <Header
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
              />
            }
          />
          <Route
            path="/my-cart"
            element={
              <MyCartList />
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage />
            }
          />
        </Routes>
      </>
  );
}

export default App;
