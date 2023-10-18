import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MyCartList from "../MyCartList/MyCartList";
import ProductsPage from "../ProductsPage/ProductsPage";
import { getProducts, getCategories } from "../../utils/api.js";
import {Provider} from 'react-redux';
import {store} from "../../redux/store";
import { ICard } from "../../types/ICard";
import { ICategory } from "../../types/ICategory";

function App() {
  const [allItems, setAllItems] = useState([]);
  const [currentItems, setCurrentItems] = useState<ICard[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [isMenuOpen, setMenuOpen] = useState(false);

  interface ICardProps {
    card: ICard;
  }

  Promise.all([getProducts(), getCategories()])
    .then(([products, categories]) => {
      setAllItems(products);
      setCategories(categories);
    })
    .catch((error) => {
      console.log(error);
    });

  useEffect(() => {
    let filtred = allItems;

    if (category !== "all") {
      filtred = filtred.filter(({card} : ICardProps) => card.category === category);
    }

    if (search) {
      filtred = filtred.filter(({card} : ICardProps) =>
        card.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setCurrentItems(filtred);
  }, [category, search, allItems]);

  function chooseCategory(category : ICard['category']) {
    setCategory(category);
  }

  function handleMenuClick() {
    setMenuOpen(true);
  }
  
  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <Provider store={store}>
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
              categories={categories}
              suppliesCards={currentItems}
              isOpen={isMenuOpen}
              onMenuClose={() => closeMenu()}
              chooseCategory={chooseCategory}
            />
          }
        />
        <Route
          path="/my-cart"
          element={
            <MyCartList
              categories={categories}
              isOpen={isMenuOpen}
              onMenuClose={() => closeMenu()}
              chooseCategory={chooseCategory}
            />
          }
        />
        <Route
          path="/products"
          element={
            <ProductsPage
              categories={categories}
              suppliesCards={currentItems}
              isOpen={isMenuOpen}
              onMenuClose={() => closeMenu()}
              chooseCategory={chooseCategory}
            />
          }
        />
      </Routes>
    </>
    </Provider>
  );
}

export default App;
