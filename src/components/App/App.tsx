import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MyCartList from "../MyCartList/MyCartList";
import ProductsPage from "../ProductsPage/ProductsPage";
import { getProducts, getCategories } from "../../utils/api";
import { useAllCategoriesDispatch, useProductsDispatch } from "../../redux/hooks";
import { setAllCategoriesActionCreator } from "../../redux/allCategories/allCategoriesActions";
import { setAllProductsActionCreator } from "../../redux/allProducts/allProductsActions";

function App() {
  //const [search, setSearch] = useState<string>("");
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
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

  // useEffect(() => {
  //   let filtred = products;

  //   if (category) {
  //     filtred = filtred.filter((card) => card.category === category);
  //   }

  //   if (search) {
  //     filtred = filtred.filter((card) =>
  //       card.description.toLowerCase().includes(search.toLowerCase())
  //     );
  //   }

  //   allProductsDispatch(setAllProductsActionCreator(filtred))
    
  // }, [category, search, products, allProductsDispatch]);

  function handleMenuClick() {
    setMenuOpen(true);
  }
  
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
      <>
        <Header
          onMenuOpen={() => handleMenuClick()}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                isOpen={isMenuOpen}
                onMenuClose={() => closeMenu()}
              />
            }
          />
          <Route
            path="/my-cart"
            element={
              <MyCartList
                isOpen={isMenuOpen}
                onMenuClose={() => closeMenu()}
              />
            }
          />
          <Route
            path="/products"
            element={
              <ProductsPage
                isOpen={isMenuOpen}
                onMenuClose={() => closeMenu()}
              />
            }
          />
        </Routes>
      </>
  );
}

export default App;
