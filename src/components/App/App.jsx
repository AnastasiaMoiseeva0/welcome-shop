import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MyCartList from "../MyCartList/MyCartList";
import ProductsPage from "../ProductsPage/ProductsPage";
import suppliesCards from "../../utils/suppliesCards.json";


function App({ setMenuOpen }) {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([...suppliesCards]);
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('all');


  useEffect(() => {
    let filtred = suppliesCards;

    if(category !== 'all') {
      filtred = filtred.filter(card => card.category === category);
    }

    if(search) {
      filtred = filtred.filter(card => card.description.toLowerCase().includes(search.toLowerCase()));
    }

    setCurrentItems(filtred);

  }, [category, search]);

  function addToOrder(card) {
    let isInArray = false;
    orders.forEach((el) => {
      if (el.id === card.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders([...orders, card]);
    }
  }

  function deleteOrder(id) {
    setOrders(orders.filter(el => el.id !== id))
  }

  function chooseCategory(category) {
    setCategory(category);
  }

  function handleMenuClick() {
    setMenuOpen(true);
  }
  return (
    <div>
      <Header onMenuOpen={() => handleMenuClick()} search={search} onSearchChange={(value) => setSearch(value)} />
      <Routes>
        <Route path="/" element={<Main suppliesCards={currentItems} onAddProduct={(card) => addToOrder(card)} />} />
        <Route path="/my-cart" element={<MyCartList orders={orders} onDelete={deleteOrder}/> }/>
        <Route
          path="/products"
          element={<ProductsPage suppliesCards={currentItems} onAddProduct={(card) => addToOrder(card)} chooseCategory={chooseCategory} />}
        />
      </Routes>
    </div>
  );
}

export default App;
