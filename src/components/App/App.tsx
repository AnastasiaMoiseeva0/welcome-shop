import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MyCartList from "../MyCartList/MyCartList";
import ProductsPage from "../ProductsPage/ProductsPage";
import { getProducts, getCategories } from "../../utils/api";
import { allCategories } from '../../redux/allCategories/allCategoriesSlice';
import { allProducts } from '../../redux/allProducts/allProductsSlice';

function App() {
  const dispatch = useDispatch();


  Promise.all([getProducts(), getCategories()])
    .then(([products, categories]) => {
      dispatch(allProducts(products))
      dispatch(allCategories(categories))
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
