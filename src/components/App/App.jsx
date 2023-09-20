import React from 'react';
import { useState } from "react";
import Header from '../Header/Header';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import MyCartList from '../MyCartList/MyCartList';

function App() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  function handleMenuClick() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div>

      <MyCartList />
    </div>
  );
}

export default App;
