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
      <Header 
        onMenuOpen={() => handleMenuClick()}/>
      <Main />
      <Menu   
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
      <MyCartList />
    </div>
  );
}

export default App;
