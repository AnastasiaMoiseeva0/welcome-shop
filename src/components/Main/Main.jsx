import Lead from "../Lead/Lead";
import Supplies from "../Supplies/Supplies";
import "./Main.css";
import Menu from '../Menu/Menu';
import { useDispatch } from "react-redux";
import { useCallback } from 'react';
import { addOrderActionCreator } from "../../redux/actions";

function Main({categories, suppliesCards, onMenuClose, isOpen}) {
  const dispatch = useDispatch();

  const addToOrder = useCallback((card) => {
    dispatch(addOrderActionCreator(card));
  }, []);

  return (
    <div>
      <main>
        <Lead />
        <Supplies suppliesCards={suppliesCards} onAddProduct={addToOrder}/>
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
