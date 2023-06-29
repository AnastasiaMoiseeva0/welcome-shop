import React from 'react';
import { useState } from "react";
import Header from './Header';
import Main from './Main';
import Menu from './Menu';
import ProductsPage from './ProductsPage';

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
      <ProductsPage />
    </div>
  );
}

export default App;
