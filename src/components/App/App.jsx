import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import MyCartList from "../MyCartList/MyCartList";
import ProductsPage from "../ProductsPage/ProductsPage";
import suppliesCards from "../../utils/suppliesCards.json";


function App({ setMenuOpen }) {
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState([...suppliesCards]);


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
    if(category === 'all') {
      setCurrentItems(suppliesCards)
      return
    }
    setCurrentItems(suppliesCards.filter(el => el.category === category));
  }

  function handleMenuClick() {
    setMenuOpen(true);
  }
  return (
    <div>
      <Header onMenuOpen={() => handleMenuClick()} />
      <Routes>
        <Route path="/" element={<Main />} />
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
