import Lead from "../Lead/Lead";
import Supplies from "../Supplies/Supplies";
import "./Main.css";
import { useState } from "react";
import Menu from '../Menu/Menu';

function Main({suppliesCards, onAddProduct}) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div>
      <main>
        <Lead />
        <Supplies suppliesCards={suppliesCards} onAddProduct={onAddProduct}/>
      </main>
      <Menu   
        isOpen={isMenuOpen}
        onClose={closeMenu}
      />
    </div>
  );
}

export default Main;
