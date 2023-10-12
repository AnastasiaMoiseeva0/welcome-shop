import Lead from "../Lead/Lead";
import Supplies from "../Supplies/Supplies";
import "./Main.css";
import Menu from '../Menu/Menu';

function Main({categories, suppliesCards, onAddProduct, onMenuClose, isOpen}) {
  return (
    <div>
      <main>
        <Lead />
        <Supplies suppliesCards={suppliesCards} onAddProduct={onAddProduct}/>
      </main>
      <Menu
        onMenuClose={onMenuClose}
        isOpen={isOpen}
        categories={categories}
      />
    </div>
  );
}

export default Main;
