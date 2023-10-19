import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MyCartList from "../MyCartList/MyCartList";
import ProductsPage from "../ProductsPage/ProductsPage";
import { getProducts, getCategories } from "../../utils/api";
import { ICard } from "../../types/ICard";
import { useAllCategoriesDispatch, useAppSelector } from "../../redux/hooks";
import { allCategoriesActionCreator } from "../../redux/allCategories/allCategoriesActions";

function App() {
  const [allItems, setAllItems] = useState<ICard[]>([]);
  const [currentItems, setCurrentItems] = useState<ICard[]>([]);
  const [search, setSearch] = useState<string>("");
  const category = useAppSelector(state => state.selectedCategory);


  // const [categories, setCategories] = useState<ICategory[]>([]);
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  
  const allCategoriesDispatch = useAllCategoriesDispatch();


  Promise.all([getProducts(), getCategories()])
    .then(([products, categories]) => {
      //setAllItems(products);
      allCategoriesDispatch(allCategoriesActionCreator(categories))
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    let filtred = allItems;

    if (category !== "all") {
      filtred = filtred.filter((card) => card.category === category);
    }

    if (search) {
      filtred = filtred.filter((card) =>
        card.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setCurrentItems(filtred);
  }, [category, search, allItems]);



  function handleMenuClick() {
    setMenuOpen(true);
  }
  
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
      <>
        <Header
          search={search}
          onSearchChange={(value) => setSearch(value)}
          onMenuOpen={() => handleMenuClick()}
        />
        <Routes>
          <Route
            path="/"
            element={
              <Main
                suppliesCards={currentItems}
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
                suppliesCards={currentItems}
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
