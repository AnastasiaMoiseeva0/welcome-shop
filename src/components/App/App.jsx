import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useCallback } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MyCartList from "../MyCartList/MyCartList";
import ProductsPage from "../ProductsPage/ProductsPage";
import { getProducts, getCategories } from "../../utils/api.js";
import {Provider} from 'react-redux';
import {store} from "../../redux/store";

function App() {
  const [orders, setOrders] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [currentItems, setCurrentItems] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [categories, setCategories] = useState([]);
  const [isMenuOpen, setMenuOpen] = useState(false);

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
      filtred = filtred.filter((card) => card.category === category);
    }

    if (search) {
      filtred = filtred.filter((card) =>
        card.description.toLowerCase().includes(search.toLowerCase())
      );
    }

    setCurrentItems(filtred);
  }, [category, search, allItems]);

  /*function changeCount(card, count) {
    const existingCardIndex = orders.findIndex((c) => card.id === c.id);

    if (existingCardIndex === -1 || count === 0) {
      return;
    }

    const newCard = { ...orders[existingCardIndex], count };

    setOrders([
      ...orders.slice(0, existingCardIndex),
      newCard,
      ...orders.slice(existingCardIndex + 1, orders.length),
    ]);
  }*/

  function deleteOrder(id) {
    setOrders(orders.filter((el) => el.id !== id));
  }

  function chooseCategory(category) {
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
            />
          }
        />
        <Route
          path="/my-cart"
          element={
            <MyCartList
              categories={categories}
              orders={orders}
              onDelete={deleteOrder}
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
